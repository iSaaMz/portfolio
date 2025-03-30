import { ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { saveAs } from 'file-saver';

const Hero = () => {
  // function gère téléchargement cv perso
  const handleDownloadCV = () => {
    saveAs('/cv-sami-assiakh.pdf', 'CV_Sami_Assiakh.pdf');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-8">
      {/* bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* text content */}
          <div className="md:w-3/5 space-y-6 mb-8 md:mb-0 animate-on-scroll">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl text-muted-foreground">Bonjour, je suis</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Sami Assiakh
              </h1>
              <div className="mt-3 text-2xl md:text-3xl font-medium text-foreground">
                Développeur Full-Stack
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Passionné par le développement web et mobile avec une expertise en Nuxt.js, Symfony, Vue.js, 
              Node.js et bien plus, je transforme des idées en solutions digitales 
              innovantes et performantes.
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
                src="../src/assets/images/sami.jpg"
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