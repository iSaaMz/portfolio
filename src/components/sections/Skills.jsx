import { useState } from 'react';
import { skillsData } from '../../assets/data/skills';
import { ChevronDown, Code2, Sparkles, TrendingUp, Award, Zap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
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
      "Langages et Frameworks Front-end": "Front-end",
      "Langages et Frameworks Back-end": "Back-end",
      "Bases de données": "Bases de données",
      "DevOps & CI/CD": "DevOps",
      "Méthodologies & Architectures": "Méthodos",
      "Outils & Autres": "Outils"
    };
    return shortLabels[category] || category;
  };

  return (
    <section id="skills" className="section py-12 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl -z-5"></div>
      
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-7 h-7 text-primary animate-pulse" />
            <h2 className="section-title mb-0">Mes compétences</h2>
            <TrendingUp className="w-7 h-7 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez mes compétences techniques organisées par domaine d'expertise
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <Tabs defaultValue={skillsData[0].category} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1 p-2 bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg rounded-2xl w-full max-w-5xl">
                {skillsData.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category} 
                    className="text-xs px-0.5 py-0.5 rounded font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-primary/10"
                  >
                    <span className="text-center leading-tight whitespace-nowrap">
                      {getTabLabel(category.category)}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {skillsData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <Card className="hover-lift-intense border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg group overflow-hidden">
                  <CardHeader className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Zap className="w-6 h-6 text-primary group-hover:animate-pulse" />
                      {getTabLabel(category.category)}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Compétences toujours visibles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.skills.slice(0, 6).map((skill, index) => (
                        <div key={skill.name} className="group/skill p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-md">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                              <span className="font-semibold text-sm group-hover/skill:text-primary transition-colors">{skill.name}</span>
                            </div>
                            <Badge variant="outline" className="text-xs font-medium group-hover/skill:border-primary/50">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="relative">
                            <Progress value={skill.level} className="h-2.5 bg-muted" />
                            <div 
                              className="absolute top-0 left-0 h-2.5 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%`, animationDelay: `${index * 100}ms` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Compétences supplémentaires avec animation */}
                    {category.skills.length > 6 && (
                      <>
                        <Separator className="my-8" />
                        <Collapsible open={expanded} onOpenChange={setExpanded}>
                          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {category.skills.slice(6).map((skill, index) => (
                                  <div 
                                    key={skill.name} 
                                    className={`group/skill p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-md opacity-0 translate-y-4 ${
                                      expanded ? 'animate-fade-in-up' : ''
                                    }`}
                                    style={{ 
                                      animationDelay: expanded ? `${index * 80}ms` : '0ms',
                                      animationFillMode: 'forwards'
                                    }}
                                  >
                                    <div className="flex items-center justify-between mb-3">
                                      <div className="flex items-center gap-2">
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                                        <span className="font-semibold text-sm group-hover/skill:text-primary transition-colors">{skill.name}</span>
                                      </div>
                                      <Badge variant="outline" className="text-xs font-medium group-hover/skill:border-primary/50">
                                        {skill.level}%
                                      </Badge>
                                    </div>
                                    <div className="relative">
                                      <Progress value={expanded ? skill.level : 0} className="h-2.5 bg-muted transition-all duration-700 ease-out" style={{ transitionDelay: expanded ? `${200 + index * 80}ms` : '0ms' }} />
                                      <div 
                                        className="absolute top-0 left-0 h-2.5 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                                        style={{ 
                                          width: expanded ? `${skill.level}%` : '0%',
                                          transitionDelay: expanded ? `${300 + index * 80}ms` : '0ms'
                                        }}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleContent>
                          <div className="flex justify-center mt-8">
                            <CollapsibleTrigger asChild>
                              <Button 
                                variant="ghost"
                                className="group relative overflow-hidden px-8 py-4 rounded-2xl border border-primary/30 hover:border-primary/70 bg-card/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`transition-all duration-300 ease-out ${
                                    expanded 
                                      ? 'rotate-180 text-primary' 
                                      : 'rotate-0 text-muted-foreground group-hover:text-primary'
                                  }`}>
                                    <ChevronDown size={20} />
                                  </div>
                                  <span className="font-semibold">
                                    {expanded ? 'Afficher moins' : `Afficher ${category.skills.length - 6} compétences supplémentaires`}
                                  </span>
                                </div>
                              </Button>
                            </CollapsibleTrigger>
                          </div>
                        </Collapsible>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Toutes les compétences techniques avec icônes */}
        <Card className="mt-16 animate-on-scroll hover-lift border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg group overflow-hidden">
          <CardHeader className="relative text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
            <CardTitle className="flex items-center justify-center gap-3 text-xl">
              <Award className="w-6 h-6 text-primary group-hover:animate-pulse" />
              Toutes mes compétences techniques
              <Sparkles className="w-6 h-6 text-primary group-hover:animate-pulse" style={{ animationDelay: '0.3s' }} />
            </CardTitle>
            <CardDescription className="mt-2">
              Vue d'ensemble de toutes mes technologies maîtrisées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
              {skillsData.flatMap(category => 
                category.skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="group flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-primary/50 hover:bg-primary/10 animate-on-scroll"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="mb-3 h-8 w-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="max-h-full max-w-full object-contain filter group-hover:brightness-110"
                      />
                    </div>
                    <span className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">{skill.name}</span>
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