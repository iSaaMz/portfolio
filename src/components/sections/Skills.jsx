import { useState } from 'react';
import { skillsData } from '../../assets/data/skills';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const [expanded, setExpanded] = useState(false);
  
  // limite le nombre de compétences affichées par défaut
  const displayLimit = expanded ? 100 : 6;

  // fonction pour basculer l'affichage complet/réduit
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getTabLabel = (category) => {
    const shortLabels = {
      "Langages & Frameworks Front": "Frontend",
      "Langages & Frameworks Back": "Backend", 
      "Méthodologies & Architectures": "Méthodologies & Architectures",
      "Outils & Autres": "Outils & Autres"
    };
    return shortLabels[category] || category;
  };

  return (
    <section id="skills" className="section py-12">
      <div className="container">
        <h2 className="section-title mb-8">Mes compétences</h2>
        
        <div className="animate-on-scroll">
          <Tabs defaultValue={skillsData[0].category} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
              {skillsData.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category} 
                  className="text-xs md:text-sm px-2 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="text-center leading-tight">
                    {getTabLabel(category.category)}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillsData.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Compétences toujours visibles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.slice(0, 6).map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Compétences supplémentaires avec animation */}
                    {category.skills.length > 6 && (
                      <Collapsible open={expanded} onOpenChange={setExpanded}>
                        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                          <div className="pt-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {category.skills.slice(6).map((skill, index) => (
                                <div 
                                  key={skill.name} 
                                  className={`space-y-2 opacity-0 translate-y-4 transition-all duration-500 ease-out ${
                                    expanded ? 'animate-fade-in-up' : ''
                                  }`}
                                  style={{ 
                                    animationDelay: expanded ? `${index * 80}ms` : '0ms',
                                    animationFillMode: 'forwards'
                                  }}
                                >
                                  <div className="flex justify-between text-sm">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.level}%</span>
                                  </div>
                                  <div className="relative">
                                    <Progress 
                                      value={expanded ? skill.level : 0} 
                                      className="h-3 transition-all duration-700 ease-out bg-secondary/50 overflow-hidden"
                                      style={{ 
                                        transitionDelay: expanded ? `${200 + index * 80}ms` : '0ms'
                                      }}
                                    />
                                    {/* Effet de brillance sur la progress bar */}
                                    <div className={`absolute inset-0 h-3 rounded-full overflow-hidden transition-opacity duration-300 ${
                                      expanded ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                                           style={{ 
                                             width: `${skill.level}%`,
                                             animationDelay: `${400 + index * 80}ms`,
                                             animationDuration: '2s'
                                           }}>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CollapsibleContent>
                        <div className="flex justify-center mt-6">
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost"
                              className="group relative overflow-hidden px-8 py-4 rounded-full border-2 border-border/50 hover:border-primary/70 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                            >
                              <div className="flex items-center gap-4">
                                {/* Icône avec rotation fluide */}
                                <div className={`relative transition-all duration-500 ease-out ${
                                  expanded 
                                    ? 'rotate-180 scale-110 text-primary' 
                                    : 'rotate-0 scale-100 text-muted-foreground group-hover:text-primary'
                                }`}>
                                  <ChevronDown size={18} />
                                  {/* Cercle de fond animé */}
                                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                    expanded ? 'bg-primary/20 scale-150' : 'bg-transparent scale-100'
                                  }`}></div>
                                </div>
                                
                                {/* Texte avec transition fluide */}
                                <div className="relative h-6 flex items-center">
                                  <div className="relative overflow-hidden">
                                    <span className={`block font-medium transition-all duration-500 ease-out ${
                                      expanded 
                                        ? 'transform translate-y-0 opacity-100 text-primary' 
                                        : 'transform translate-y-0 opacity-100 text-foreground group-hover:text-primary'
                                    }`}>
                                      {expanded ? 'Afficher moins' : `Afficher plus (${category.skills.length - 6} autres)`}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Effet de brillance au hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                              
                              {/* Bordure animée */}
                              <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                                expanded 
                                  ? 'border-primary/50 shadow-lg shadow-primary/20' 
                                  : 'border-transparent'
                              }`}></div>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                      </Collapsible>
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