import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation
  const navItems = [
    { name: 'Accueil', to: 'hero' },
    { name: 'À propos', to: 'about' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Expériences', to: 'experience' },
    { name: 'Formation', to: 'education' },
    { name: 'Projets', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  // gère l'événement de défilement pour changer le style de la barre de navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="cursor-pointer"
          >
            Sami Assiakh
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-nav-link"
              className="cursor-pointer text-foreground hover:text-primary transition-all py-2 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Menu mobile avec Sheet */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      activeClass="active-nav-link"
                      className="cursor-pointer text-foreground hover:text-primary transition-all py-2 font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;