import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: "Master Ingénierie du Web",
      institution: "École Supérieure de Génie Informatique, Paris (12e)",
      period: "2023 - 2025",
      description: "Formation approfondie en développement web, architecture logicielle, DevOps et gestion de projet.",
      image: "../src/assets/images/education/esgi.png"
    },
    {
      degree: "Licence professionnelle - Métiers de l'informatique : Conception, Développement et Test de logiciels",
      institution: "IUT de Villetaneuse et IUT de Paris",
      period: "2022 - 2023",
      description: "Spécialisation en développement d'applications web et mobile, avec focus sur les tests logiciels et la qualité.",
      image: "../src/assets/images/education/iut-paris.png"
    },
    {
      degree: "L2 générale Informatique",
      institution: "Institut Galilée, Villetaneuse",
      period: "2021 - 2022",
      description: "Fondamentaux de l'informatique, algorithmique et programmation.",
      image: "../src/assets/images/education/institut-galilee.jpg"
    },
    {
      degree: "DUT Informatique",
      institution: "IUT de Villetaneuse",
      period: "2019 - 2021",
      description: "Formation complète en informatique couvrant la programmation, les bases de données, et les réseaux.",
      image: "../src/assets/images/education/iut-villetaneuse.png"
    },
    {
      degree: "Baccalauréat Scientifique option Sciences de l'Ingénieur",
      institution: "Lycée général Gustave Monod, Enghien-les-Bains",
      period: "2019",
      description: "Formation scientifique avec spécialisation en sciences de l'ingénieur.",
      image: "../src/assets/images/education/lyc-monod.jpg"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Formation</h2>
        
        <div className="timeline">
          {educations.map((education, index) => (
            <div key={index} className="timeline-item animate-on-scroll">
              <div className="timeline-marker"></div>
              
              {/* Date desktop */}
              <div className="hidden md:block timeline-date">
                <div className="flex items-center justify-end gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>{education.period}</span>
                </div>
              </div>
              
              <div className="timeline-content bg-card hover:shadow-md transition-shadow">
                {/* Date mobile */}
                <div className="md:hidden mb-4 flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>{education.period}</span>
                </div>
                
                <div className="flex items-start gap-4">
                  {/* logo/image école */}
                  {education.image && (
                    <div className="hidden sm:block flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-border">
                      <img 
                        src={education.image} 
                        alt={`Logo ${education.institution}`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold">{education.degree}</h3>
                      <div className="flex items-center gap-1.5 mt-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{education.institution}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center">Certifications et compétences</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Compétences linguistiques</h4>
              </div>
              
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Anglais</span>
                  <span className="font-medium">C1</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Allemand</span>
                  <span className="font-medium">B2</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Kabyle</span>
                  <span className="font-medium">Notions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Compétences transversales</h4>
              </div>
              
              <ul className="space-y-2">
                <li>Gestion de projet agile</li>
                <li>Droit en technologies de l&apos;information, RGPD</li>
                <li>Économie et comptabilité, marketing digital</li>
                <li>Communication professionnelle</li>
                <li>Business intelligence</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">
                Test of English for International Communication
                </h4>
              </div>
              
              <ul className="space-y-2">
                <li>Resultat : en attente de resultat /990</li>
                <li>Niveau validé :  B2 / C1 (en attente de resultat)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;