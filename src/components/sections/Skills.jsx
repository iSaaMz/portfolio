import { useState } from 'react';
import { skillsData } from '../../assets/data/skills';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const [expanded, setExpanded] = useState(false);
  
  // limite le nombre de compétences affichées par défaut
  const displayLimit = expanded ? 100 : 6;

  // fonction pour basculer l'affichage complet/réduit
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="skills" className="section py-12">
      <div className="container">
        <h2 className="section-title mb-8">Mes compétences</h2>
        
        <div className="animate-on-scroll">
          <Tabs defaultValue={skillsData[0].category} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {skillsData.map((category) => (
                <TabsTrigger key={category.category} value={category.category} className="text-xs md:text-sm">
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillsData.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <Card>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.slice(0, displayLimit).map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                    
                    {category.skills.length > 6 && (
                      <div className="flex justify-center mt-6">
                        <Button 
                          variant="ghost"
                          onClick={toggleExpand}
                          className="flex items-center gap-2"
                        >
                          {expanded ? (
                            <>
                              <ChevronUp size={16} />
                              Afficher moins
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} />
                              Afficher plus ({category.skills.length - 6} autres)
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Toutes les compétences techniques avec icônes */}
        <Card className="mt-12 animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-center">Toutes mes compétences techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {skillsData.flatMap(category => 
                category.skills.map(skill => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg border border-border bg-background text-center transition-all duration-300 hover:shadow-md hover:border-primary hover:bg-accent"
                  >
                    <div className="mb-2 h-10 w-10 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium line-clamp-2">{skill.name}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;