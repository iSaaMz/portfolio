import { ArrowDown, Download, Sparkles, Code2, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-8 overflow-hidden">
      {/* Arrière-plan animé avec particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10"></div>
      </div>
      
      {/* Particles flottantes */}
      <div className="absolute inset-0 -z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <div className="w-2 h-2 bg-primary/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: `${i * 0.3}s` }}></div>
          </div>
        ))}
      </div>
      
      {/* Gradient suiveur de souris */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: isHovering ? 0.6 : 0.3
        }}
      />
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* text content avec animations améliorées */}
          <div className={`md:w-3/5 space-y-6 mb-8 md:mb-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}>
            <div className="flex flex-col relative">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-lg md:text-xl text-muted-foreground animate-fade-in-up">Bonjour, je suis</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold relative group">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Sami Assiakh
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </h1>
              <div className={`mt-3 flex items-center gap-3 text-2xl md:text-3xl font-medium text-foreground transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <Code2 className="w-7 h-7 text-primary/70 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Chef de Projet SI & Développeur Full-Stack</span>
                <Palette className="w-7 h-7 text-primary/70 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Fort d&apos;une double expertise en gestion de projet et développement web, je combine 
              compétences techniques (Nuxt.js, Symfony, Vue.js, Node.js) et vision stratégique 
              pour piloter des projets digitaux innovants de A à Z.
            </p>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Après une alternance enrichissante au Ministère de l&apos;Intérieur, j&apos;ai rejoint 
              l&apos;ANFSI (Agence du Numérique des Forces de Sécurité Intérieure) en tant que Chef de Projet SI, 
              où je contribue à la transformation digitale et à l&apos;innovation technologique.
            </p>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              N&apos;hésitez pas à jeter un œil à mon CV et à me contacter pour échanger sur vos projets !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer group"
              >
                <Button size="lg" className="w-full sm:w-auto relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  <span className="relative z-10">Me contacter</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="w-full sm:w-auto">
                      <Button
                        variant="secondary"
                        size="lg"
                        disabled
                        className="w-full sm:w-auto relative overflow-hidden opacity-50 cursor-not-allowed"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        <span className="relative z-10">Télécharger mon CV</span>
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CV non disponible au téléchargement pour le moment</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* image de profil élégante */}
          <div className="md:w-2/5 flex justify-center animate-on-scroll">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* Fond gradient subtil */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-sm"></div>
              
              {/* Container image principal */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 group-hover:scale-105">
                <img
                  src="/assets/images/sami.jpg"
                  alt="Sami Assiakh"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                />
                
                {/* Overlay gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Ring externe minimaliste */}
              <div className="absolute -inset-2 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll amélioré */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer group"
          >
            <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg animate-bounce-slow hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25">
              <CardContent className="p-3 flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1 group-hover:text-primary transition-colors duration-200">Découvrir</span>
                <ArrowDown className="text-primary animate-pulse" size={20} />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;