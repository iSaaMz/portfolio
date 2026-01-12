import { Linkedin, Mail, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h3 className="text-2xl font-bold hover:text-primary-foreground/80 transition-colors">
                Sami Assiakh
              </h3>
            </Link>
            <p className="mt-2 text-primary-foreground/80">
              Chef de Projet SI & Développeur Full-Stack | Paris, France
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                <a
                  href="https://www.linkedin.com/in/sami-assiakh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                <a
                  href="mailto:sami.assiakh@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                <a
                  href="https://github.com/iSaaMz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80">
              &copy; {currentYear} Sami Assiakh. Tous droits réservés.
            </p>
          </div>
        </div>
        
        <Separator className="my-6 bg-primary-foreground/20" />
        
        <div className="text-center text-sm text-primary-foreground/60">
          <p>Créé avec React, Vite et shadcn/ui</p>
        </div>
      </div>
      
      {/* Bouton retour en haut */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <Button
            size="icon"
            className="rounded-full shadow-lg hover:shadow-xl transition-all bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;