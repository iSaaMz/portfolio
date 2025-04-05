import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      // vérification basée sur la largeur d'écran
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
      setIsDesktop(width > 1024);
      
      // vérification pour les appareils tactiles
      const isTouchDevice = 'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        navigator.msMaxTouchPoints > 0;
        
      if (isTouchDevice) {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceDetect;