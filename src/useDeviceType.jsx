import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = '(max-width: 1279px)'; // Mobile devices have width below 1024px

    const checkDeviceType = () => {
      const isMobileDevice = window.matchMedia(mobileQuery).matches;
      setIsMobile(isMobileDevice);
    };

    checkDeviceType(); // Initial check

    // Listen for changes in the screen size
    const handleResize = () => {
      checkDeviceType();
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useDeviceType;