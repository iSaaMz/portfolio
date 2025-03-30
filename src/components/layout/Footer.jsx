import { Linkedin, Mail, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center justify-center md:justify-start cursor-pointer"
            >
              <span className="text-2xl font-bold">Sami Assiakh</span>
            </Link>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Développeur Full-Stack | Paris, France
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/sami-assiakh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sami.assiakh@gmail.com"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/iSaaMz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              &copy; {currentYear} Sami Assiakh. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bouton retour en haut */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-primary-foreground text-primary rounded-full p-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          aria-label="Retour en haut"
        >
          <ArrowUp size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;