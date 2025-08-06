import { User, Mail, MapPin, Phone, Briefcase, GraduationCap, Music, Dumbbell, PaintBucket, Sparkles, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';

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
    <section id="about" className="section bg-secondary/30 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/20 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl -z-5"></div>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="section-title mb-0">À propos de moi</h2>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez qui je suis, mes passions et ce qui me motive dans le développement
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description - Plus large */}
          <div className="lg:col-span-2">
            <Card className="animate-on-scroll hover-lift-intense border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg group overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
                <CardTitle className="flex items-center gap-2 text-xl">
                  Qui suis-je ?
                </CardTitle>
                <CardDescription className="text-base">
                  <strong>Développeur passionné par l&apos;innovation et l&apos;excellence technique</strong>
                </CardDescription>
              </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-justify">
                Je suis un développeur full-stack passionné par les technologies web et mobile, avec une 
                expertise particulière en Nuxt.js/Vue.js, Symfony et Node.js. Actuellement en fin d&apos;alternance au Ministère 
                de l&apos;Intérieur, je développe des applications web pour la Préfecture de Police de Paris.
              </p>
              <p className="text-muted-foreground text-justify">
                J&apos;aime relever des défis techniques et créer des solutions innovantes qui répondent 
                parfaitement aux besoins des utilisateurs. Je m&apos;intéresse particulièrement aux 
                architectures propres, à la sécurité des applications et aux pratiques DevOps.
              </p>
              <p className="text-muted-foreground text-justify">
                Curieux et rigoureux, j&apos;apprécie autant le travail en équipe que les missions en autonomie, 
                où je peux avancer efficacement dans l&apos;ombre sans difficulté. Travailler seul ne me pose 
                aucun problème, bien au contraire : cela me permet de me concentrer pleinement et d&apos;être 
                encore plus productif. Je continue à me former constamment pour rester à jour avec les dernières 
                technologies et les meilleures pratiques du développement web.
              </p>
              <p className="text-muted-foreground text-justify">
                En parallèle de mon activité de développeur, je suis également passionné par la musculation et le fitness. 
                C&apos;est un mode de vie qui m&apos;a appris la discipline, la persévérance et le dépassement de soi — des valeurs que je 
                retrouve aussi dans le code. J&apos;aspire à développer des projets autour de cette passion, et à proposer 
                un jour du coaching personnalisé, en ligne ou en présentiel.
              </p>
              
              <Separator className="my-6" />
              
              {/* Centres d'intérêts améliorés */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Centres d&apos;intérêt
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Badge variant="secondary" className="flex items-center gap-2 p-3 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default hover:scale-105">
                    <Dumbbell size={18} className="text-primary" />
                    <span className="font-medium">Musculation & fitness</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 p-3 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default hover:scale-105" style={{ animationDelay: '0.1s' }}>
                    <Music size={18} className="text-primary" />
                    <span className="font-medium">Musées & Expositions</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 p-3 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default hover:scale-105" style={{ animationDelay: '0.2s' }}>
                    <PaintBucket size={18} className="text-primary" />
                    <span className="font-medium">Activités manuelles</span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
          
          {/* Infos personnelles - Sidebar */}
          <div className="space-y-6 animate-on-scroll">
            <Card className="hover-lift border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg group overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 to-primary/60"></div>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary group-hover:animate-pulse" />
                  Informations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {personalInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200 group/item">
                    <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-xl shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-200">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.label}</span>
                      <span className="block text-sm font-semibold truncate">{item.value}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Langues */}
            <Card className="hover-lift border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg group overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 to-primary/60"></div>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary group-hover:animate-pulse" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  { name: 'Français', level: 'Natif', value: 100, color: 'bg-green-500' },
                  { name: 'Anglais', level: 'C1', value: 90, color: 'bg-blue-500' },
                  { name: 'Allemand', level: 'B2', value: 70, color: 'bg-orange-500' },
                ].map((lang, index) => (
                  <div key={index} className="group/lang">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm">{lang.name}</span>
                      <Badge variant="outline" className="text-xs font-medium group-hover/lang:border-primary/50">{lang.level}</Badge>
                    </div>
                    <div className="relative">
                      <Progress value={lang.value} className="h-2 bg-muted" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${lang.color}`}
                        style={{ width: `${lang.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Aptitudes personnelles - Full width */}
        <div className="mt-16">
          <Card className="animate-on-scroll hover-lift-intense border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg group overflow-hidden">
            <CardHeader className="relative text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              <CardTitle className="flex items-center justify-center gap-2 text-xl">
                <Briefcase className="w-6 h-6 text-primary group-hover:animate-pulse" />
                Aptitudes personnelles
              </CardTitle>
              <CardDescription>
                Les qualités qui définissent ma façon de travailler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['Autonomie', 'Rigueur', 'Créativité', 'Curiosité', 'Travail d\'équipe', 'Adaptation'].map((quality, index) => (
                  <div key={index} className="group/quality">
                    <Badge 
                      variant="secondary" 
                      className="w-full justify-center py-3 text-center font-semibold hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg animate-on-scroll"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="group-hover/quality:animate-pulse">{quality}</span>
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;