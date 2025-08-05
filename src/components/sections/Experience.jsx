import { useState } from 'react';
import { Briefcase, Building, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);
  
  const toggleExpansion = (index) => {
    if (expandedExp === index) {
      setExpandedExp(null);
    } else {
      setExpandedExp(index);
    }
  };

  const experiences = [
    {
      title: "À la recherche d'un CDI...",
      type: "CDI",
      company: "?",
      location: "?",
      period: "1er Octobre 2025",
      description: [
        "A la recherche d'un CDI dans le développement web ou mobile à partir du 1er Octobre 2025",
      ],
      technologies: [""],
      image: ""
    },
    {
      title: "Développeur d'applications web",
      type: "Alternance",
      company: "Ministère de l'Intérieur - Préfecture de Police de Paris",
      location: "Paris 13ème",
      period: "Novembre 2022 - Septembre 2025",
      description: [
        "Développement d'applications web destinés aux agents de la Direction de la Sécurité de Proximité de l'Agglomération Parisienne sous PHP, Symfony et Nuxt.js",
        "Migration et reprise de données d'anciennes bases vers de nouvelles structures via l'ETL Talend Open Studio",
        "Conception de schémas relationnels",
        "Reprise d'anciennes applications sous PHP et CodeIgniter",
        "Réalisation de playbooks Ansible simples dans un contexte de déploiement automatisé",
        "Mise en conteneur d'applications internes via Docker",
        "Administration, maintenance, tests et déploiements"
      ],
      technologies: ["PHP", "Symfony", "Nuxt.js", "Talend Open Studio", "Docker", "Ansible"],
      image: "/assets/images/experience/minint.png"
    },
    {
      title: "Développeur mobile front-end",
      type: "Stage",
      company: "Ceos Tech",
      location: "Aulnay-sous-Bois",
      period: "Avril 2021 - Juin 2021",
      description: [
        "Développement front-end mobile de l'application MARKUS (solution mobile de gestion pour restaurateurs) sous React Native",
        "Conception et intégration de nouvelles fonctionnalités métier",
        "Refonte complète de l'interface utilisateur pour une expérience optimisée sur mobile et tablette",
        "Optimisation du code et maintenance continue de l'application"
      ],
      technologies: ["React Native", "JavaScript", "UI/UX Design"],
      image: "/assets/images/experience/ceostech.png"
    },
    // {
    //   title: "Chargé de soins (mission ponctuelle)",
    //   type: "Bénévolat",
    //   company: "Comité du Chat de Sevran",
    //   location: "Hôpital Robert Ballanger",
    //   period: "Juin 2022",
    //   description: [
    //     "Entretien des habitats, socialisation et soins donnés aux chats",
    //     "Aide au transport de matériaux",
    //     "Aide à la Brigade de Protection Animale"
    //   ],
    //   technologies: [],
    //   image: "/assets/images/sami.jpg"
    // }
  ];

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Expérience professionnelle</h2>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Collapsible key={index} open={expandedExp === index} onOpenChange={() => toggleExpansion(index)}>
              <Card className={`animate-on-scroll hover-lift transition-all duration-300 ${
                expandedExp === index 
                  ? 'ring-2 ring-primary/20 shadow-xl shadow-primary/10 bg-gradient-to-br from-background to-secondary/20' 
                  : 'hover:shadow-lg'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      {experience.image && (
                        <div className={`hidden sm:block flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border transition-all duration-300 ${
                          expandedExp === index 
                            ? 'border-primary/50 ring-2 ring-primary/20 shadow-lg' 
                            : 'border-border'
                        }`}>
                          <img 
                            src={experience.image} 
                            alt={`Logo ${experience.company}`} 
                            className={`w-full h-full object-cover object-center transition-all duration-300 ${
                              expandedExp === index ? 'scale-110' : 'scale-100'
                            }`}
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`transition-all duration-300 ${
                              expandedExp === index 
                                ? 'bg-primary/10 border-primary/50 text-primary shadow-sm' 
                                : ''
                            }`}
                          >
                            {experience.type}
                          </Badge>
                          <div className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                            expandedExp === index ? 'text-primary' : 'text-muted-foreground'
                          }`}>
                            <Calendar size={14} />
                            {experience.period}
                          </div>
                        </div>
                        <CardTitle className={`text-lg transition-all duration-300 ${
                          expandedExp === index ? 'text-primary font-bold' : ''
                        }`}>
                          {experience.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building size={14} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase size={14} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost"
                        className="group relative overflow-hidden px-4 py-2 rounded-full border-2 border-border/50 hover:border-primary/70 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                        aria-label={expandedExp === index ? "Réduire" : "Développer"}
                      >
                        {/* Icône avec rotation fluide */}
                        <div className={`relative transition-all duration-500 ease-out ${
                          expandedExp === index 
                            ? 'rotate-180 scale-110 text-primary' 
                            : 'rotate-0 scale-100 text-muted-foreground group-hover:text-primary'
                        }`}>
                          <ChevronDown size={16} />
                          {/* Cercle de fond animé */}
                          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            expandedExp === index ? 'bg-primary/20 scale-150' : 'bg-transparent scale-100'
                          }`}></div>
                        </div>
                        
                        {/* Effet de brillance au hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        {/* Bordure animée */}
                        <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                          expandedExp === index 
                            ? 'border-primary/50 shadow-lg shadow-primary/20' 
                            : 'border-transparent'
                        }`}></div>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </CardHeader>
                
                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                  <CardContent className="pt-4">
                    <Separator className="mb-6 bg-gradient-to-r from-transparent via-border to-transparent" />
                    
                    {/* Description avec animation cascade */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-lg font-semibold text-primary mb-3 animate-in slide-in-from-left-2 duration-500">
                        Missions & Responsabilités
                      </h4>
                      <ul className="space-y-3">
                        {experience.description.map((item, i) => (
                          <li 
                            key={i} 
                            className={`flex items-start gap-3 text-muted-foreground opacity-0 translate-y-4 transition-all duration-500 ease-out ${
                              expandedExp === index ? 'animate-fade-in-up' : ''
                            }`}
                            style={{ 
                              animationDelay: expandedExp === index ? `${i * 120}ms` : '0ms',
                              animationFillMode: 'forwards'
                            }}
                          >
                            {/* Bullet point stylé */}
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/60 mt-2 animate-pulse-subtle"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies avec animation spéciale */}
                    {experience.technologies.length > 0 && experience.technologies[0] !== "" && (
                      <div className={`mt-6 p-4 rounded-lg bg-secondary/30 border border-border/50 opacity-0 translate-y-4 transition-all duration-500 ease-out ${
                        expandedExp === index ? 'animate-fade-in-up' : ''
                      }`}
                      style={{ 
                        animationDelay: expandedExp === index ? `${experience.description.length * 120 + 200}ms` : '0ms',
                        animationFillMode: 'forwards'
                      }}>
                        <h4 className="text-sm font-semibold mb-3 text-primary flex items-center gap-2">
                          <div className="w-1 h-4 bg-primary rounded-full"></div>
                          Technologies utilisées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary"
                              className={`relative overflow-hidden border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 opacity-0 translate-y-2 ${
                                expandedExp === index ? 'animate-fade-in-up' : ''
                              }`}
                              style={{
                                animationDelay: expandedExp === index ? `${experience.description.length * 120 + 400 + i * 80}ms` : '0ms',
                                animationFillMode: 'forwards'
                              }}
                            >
                              {tech}
                              {/* Effet de brillance sur les badges */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;