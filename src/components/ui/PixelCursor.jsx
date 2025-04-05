import { useEffect, useState, useRef } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';

const PixelCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const { isDesktop } = useDeviceDetect();
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;
    
    // masquage du curseur par défaut
    document.body.style.cursor = 'none';
    
    // gestion mouvement de la souris
    const onMouseMove = (e) => {
      // maj de la position du curseur
      setPosition({ x: e.clientX, y: e.clientY });
      
      // récupération de l'élément sous la souris
      const target = document.elementFromPoint(e.clientX, e.clientY);
      
      // vérification si l'élément est cliquable
      const isClickable = target && (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        (target.hasAttribute('role') && target.getAttribute('role') === 'button')
      );
      
      setLinkHovered(isClickable);
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    // eventlisteners mouvement de la souris et interactions
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // vérifie si tous les éléments interactifs ont le style correct
    const applyInteractiveStyles = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer, input[type="submit"], input[type="button"]');
      interactiveElements.forEach(el => {
        el.style.cursor = 'none';
        
        // vérifie que la position est correcte pour le positionnement absolu
        if (window.getComputedStyle(el).position === 'static') {
          el.style.position = 'relative';
        }
      });
    };
    
    applyInteractiveStyles();
    
    // observe les nouveaux éléments ajoutés au dom
    const observer = new MutationObserver(() => {
      applyInteractiveStyles();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'auto';
      observer.disconnect();
    };
  }, [isDesktop]);

  // desactive le curseur personnalisé sur mobile/tablette
  if (!isDesktop) return null;

  // couleurs glow curseur
  const glowColors = {
    normal: '#2400AB',
    hover: '#0066ff',
    click: '#ff00ff'
  };

  // taille curseur
  const cursorSize = 25;
  
  return (
    <>
      {/* glow effect */}
      <div 
        ref={glowRef}
        className="fixed pointer-events-none z-[9997] custom-cursor-glow"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
          width: `${cursorSize + 16}px`,
          height: `${cursorSize + 16}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${
            clicked 
              ? glowColors.click 
              : linkHovered 
                ? glowColors.hover 
                : glowColors.normal
          } 0%, rgba(255,255,255,0) 70%)`,
          opacity: clicked ? 0.7 : 0.4,
          transition: 'opacity 0.3s ease, background 0.3s ease',
          filter: `blur(8px)`,
          mixBlendMode: 'screen',
        }}
      />
      
      {/* main cursor */}
      <div 
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] custom-cursor pixel-cursor ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'clicked' : ''} ${linkHovered ? 'hovered' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? 'scale(0.9)' : 'scale(1)'}`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          backgroundImage: `url(${linkHovered ? '/assets/icons/pixel-cursor-hand.svg' : '/assets/icons/pixel-cursor.svg'})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: 'transform 0.1s ease',
          opacity: 1,
          filter: `drop-shadow(0 0 2px ${
            clicked 
              ? glowColors.click 
              : linkHovered 
                ? glowColors.hover 
                : glowColors.normal
          }) drop-shadow(0 0 5px ${
            clicked 
              ? glowColors.click 
              : linkHovered 
                ? glowColors.hover 
                : glowColors.normal
          })`,
        }}
      />
    </>
  );
};

export default PixelCursor;