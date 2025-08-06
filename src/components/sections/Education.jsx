import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const Education = () => {
  const educations = [
    {
      degree: "Master Ingénierie du Web",
      institution: "École Supérieure de Génie Informatique, Paris (12e)",
      period: "2023 - 2025",
      description: "Formation approfondie en développement web, architecture logicielle, DevOps et gestion de projet.",
      image: "/assets/images/education/esgi.png"
    },
    {
      degree: "Licence professionnelle - Métiers de l'informatique : Conception, Développement et Test de logiciels",
      institution: "IUT de Villetaneuse et IUT de Paris",
      period: "2022 - 2023",
      description: "Spécialisation en développement d'applications web et mobile, avec focus sur les tests logiciels et la qualité.",
      image: "/assets/images/education/iut-paris.png"
    },
    {
      degree: "L2 générale Informatique",
      institution: "Institut Galilée, Villetaneuse",
      period: "2021 - 2022",
      description: "Fondamentaux de l'informatique, algorithmique et programmation.",
      image: "/assets/images/education/institut-galilee.jpg"
    },
    {
      degree: "DUT Informatique",
      institution: "IUT de Villetaneuse",
      period: "2019 - 2021",
      description: "Formation complète en informatique couvrant la programmation, les bases de données, et les réseaux.",
      image: "/assets/images/education/iut-villetaneuse.png"
    },
    {
      degree: "Baccalauréat Scientifique option Sciences de l'Ingénieur",
      institution: "Lycée général Gustave Monod, Enghien-les-Bains",
      period: "2019",
      description: "Formation scientifique avec spécialisation en sciences de l'ingénieur.",
      image: "/assets/images/education/lyc-monod.jpg"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Formation</h2>
        
        <div className="space-y-6">
          {educations.map((education, index) => (
            <Card key={index} className="animate-on-scroll transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {education.image && (
                    <div className="hidden sm:block flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-border">
                      <img 
                        src={education.image} 
                        alt={`Logo ${education.institution}`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar size={12} />
                        {education.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{education.degree}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{education.institution}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {education.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center">Certifications et compétences</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  Compétences linguistiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Anglais</span>
                  <Badge>C1</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Allemand</span>
                  <Badge>B2</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  Compétences transversales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gestion de projet agile</li>
                  <li>• Droit en technologies de l&apos;information, RGPD</li>
                  <li>• Économie et comptabilité, marketing digital</li>
                  <li>• Communication professionnelle</li>
                  <li>• Business intelligence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  TOEIC
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Score</span>
                  <Badge variant="secondary">905 / 990</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Niveau validé</span>
                  <Badge>B2</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;