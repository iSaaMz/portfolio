import { useState } from 'react';
import { Briefcase, Building, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

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
            <Card key={index} className="animate-on-scroll transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {experience.image && (
                      <div className="hidden sm:block flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-border">
                        <img 
                          src={experience.image} 
                          alt={`Logo ${experience.company}`} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{experience.type}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          {experience.period}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{experience.title}</CardTitle>
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
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleExpansion(index)}
                    aria-label={expandedExp === index ? "Réduire" : "Développer"}
                  >
                    {expandedExp === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </Button>
                </div>
              </CardHeader>
              
              {expandedExp === index && (
                <CardContent className="pt-0">
                  <Separator className="mb-4" />
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  {experience.technologies.length > 0 && experience.technologies[0] !== "" && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;