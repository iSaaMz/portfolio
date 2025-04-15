import { ArrowDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { saveAs } from 'file-saver';
import { track } from '@vercel/analytics';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);


  // function gère téléchargement cv perso
  const handleDownloadCV = () => {
    saveAs('/cv-sami-assiakh.pdf', 'CV_Sami_Assiakh.pdf');
    track('cv_download', { location: 'hero_section' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-8">
      {/* bg gradient avec animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* text content avec animations améliorées */}
          <div className={`md:w-3/5 space-y-6 mb-8 md:mb-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl text-muted-foreground">Bonjour, je suis</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Sami Assiakh
              </h1>
              <div className={`mt-3 text-2xl md:text-3xl font-medium text-foreground transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Développeur Full-Stack
              </div>
            </div>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Passionné par le développement web et mobile avec une expertise en Nuxt.js, Symfony, Vue.js, 
              Node.js et bien plus, je transforme des idées en solutions digitales 
              innovantes et performantes.
            </p>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Actuellement en fin d&apos;études et bientôt en fin de contrat au Ministère de l&apos;Intérieur,
              je suis actuellement à la recherche d&apos;un poste en tant que développeur full-stack.
            </p>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              N&apos;hésitez pas à jeter un oeil à mon CV et à me contacter si vous êtes intéressé par mon profil !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center"
              >
                Me contacter
              </Link>
              <button
                onClick={handleDownloadCV}
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Télécharger mon CV
              </button>
            </div>
          </div>

          {/* image de profil */}
          <div className="md:w-2/5 flex justify-center animate-on-scroll">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/40 animate-pulse"></div>
              <img
                src="/assets/images/sami.jpg"
                alt="Sami Assiakh"
                className="absolute inset-[6px] rounded-full object-cover border-4 border-background"
                style={{ width: "calc(100% - 12px)", height: "calc(100% - 12px)" }}
              />
            </div>
          </div>
        </div>

        {/* indacteur scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"></span>
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;