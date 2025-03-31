import { User, Mail, MapPin, Phone, Briefcase, GraduationCap, Music, Dumbbell, PaintBucket } from 'lucide-react';

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
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-semibold">Qui suis-je?</h3>
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
            
            {/* Centres d'intêrets */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Centres d&apos;intérêt</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                  <Dumbbell size={18} className="text-primary" />
                  <span>Sport</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                  <Music size={18} className="text-primary" />
                  <span>Musées & Expositions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                  <PaintBucket size={18} className="text-primary" />
                  <span>Activités manuelles</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Infos personnelles */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Informations personnelles</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-border">
                  <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">{item.label}</span>
                    <span className="block font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Langues */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Langues</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Français</span>
                    <span>Natif</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Anglais</span>
                    <span>C1</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Allemand</span>
                    <span>B2</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Kabyle</span>
                    <span>Notions</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Aptitudes personnelles */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center">Aptitudes personnelles</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Autonomie', 'Rigueur', 'Créativité', 'Curiosité', 'Travail d\'équipe', 'Adaptation'].map((quality, index) => (
              <div key={index} className="bg-background rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-medium">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;