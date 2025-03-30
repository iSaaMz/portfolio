import { Briefcase, Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
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
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item animate-on-scroll">
              <div className="timeline-marker"></div>
              
              {/* Date desktop */}
              <div className="hidden md:block timeline-date">
                <div className="flex items-center justify-end gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>{experience.period}</span>
                </div>
              </div>
              
              <div className="timeline-content bg-card hover:shadow-md transition-shadow">
                {/* Date mobile */}
                <div className="md:hidden mb-4 flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>{experience.period}</span>
                </div>
                
                <div className="flex items-start gap-4">
                  {/* logo/image entreprise */}
                  {experience.image && (
                    <div className="hidden sm:block flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-border">
                      <img 
                        src={experience.image} 
                        alt={`Logo ${experience.company}`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary w-fit mb-2">
                        {experience.type}
                      </span>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Building size={16} />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    {experience.technologies.length > 0 && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;