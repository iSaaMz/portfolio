import { User, Mail, MapPin, Phone, Briefcase, GraduationCap, Music, Dumbbell, PaintBucket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: "Nom", value: "Sami Assiakh" },
    { icon: <Mail size={20} />, label: "Email", value: "sami.assiakh@gmail.com" },
    { icon: <Phone size={20} />, label: "Téléphone", value: "07 82 28 22 96" },
    { icon: <MapPin size={20} />, label: "Adresse", value: "Argenteuil, France" },
    { icon: <Briefcase size={20} />, label: "Expérience", value: "3+ années" },
    { icon: <GraduationCap size={20} />, label: "Formation", value: "Master Ingénierie du Web" },
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Description */}
          <Card className="animate-on-scroll">
            <CardHeader>
              <CardTitle>Qui suis-je?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Je suis un développeur full-stack passionné par les technologies web et mobile, avec une 
                expertise particulière en Nuxt.js/Vue.js, Symfony et Node.js. Actuellement en fin d&apos;alternance au Ministère 
                de l&apos;Intérieur, je développe des applications web pour la Préfecture de Police de Paris.
              </p>
              <p className="text-muted-foreground">
                J&apos;aime relever des défis techniques et créer des solutions innovantes qui répondent 
                parfaitement aux besoins des utilisateurs. Je m&apos;intéresse particulièrement aux 
                architectures propres, à la sécurité des applications et aux pratiques DevOps.
              </p>
              <p className="text-muted-foreground">
                Curieux et rigoureux, j&apos;apprécie autant le travail en équipe que les missions en autonomie, 
                où je peux avancer efficacement dans l&apos;ombre sans difficulté. Travailler seul ne me pose 
                aucun problème, bien au contraire : cela me permet de me concentrer pleinement et d&apos;être 
                encore plus productif. Je continue à me former constamment pour rester à jour avec les dernières 
                technologies et les meilleures pratiques du développement web.
              </p>
              <p className="text-muted-foreground">
                En parallèle de mon activité de développeur, je suis également passionné par la musculation et le fitness. 
                C&apos;est un mode de vie qui m&apos;a appris la discipline, la persévérance et le dépassement de soi — des valeurs que je 
                retrouve aussi dans le code. J&apos;aspire à développer des projets autour de cette passion, et à proposer 
                un jour du coaching personnalisé, en ligne ou en présentiel.
              </p>
              
              {/* Centres d'intêrets */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">Centres d&apos;intérêt</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Dumbbell size={16} />
                    Musculation & fitness
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Music size={16} />
                    Musées & Expositions
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <PaintBucket size={16} />
                    Activités manuelles
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Infos personnelles */}
          <div className="space-y-6 animate-on-scroll">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {personalInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground">{item.label}</span>
                      <span className="block font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Langues */}
            <Card>
              <CardHeader>
                <CardTitle>Langues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Français</span>
                    <Badge variant="outline">Natif</Badge>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Anglais</span>
                    <Badge variant="outline">C1</Badge>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Allemand</span>
                    <Badge variant="outline">B2</Badge>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Kabyle</span>
                    <Badge variant="outline">Notions</Badge>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Aptitudes personnelles */}
        <Card className="mt-16 animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-center">Aptitudes personnelles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {['Autonomie', 'Rigueur', 'Créativité', 'Curiosité', 'Travail d\'équipe', 'Adaptation'].map((quality, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2 text-center">
                  {quality}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;