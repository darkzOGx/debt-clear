import { useEffect } from 'react';

export const useCanonicalLink = (href) => {
  useEffect(() => {
    // Remove any existing canonical links first
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create new canonical link element
    if (href) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = href;
      document.head.appendChild(link);
    }

    // Cleanup function
    return () => {
      const currentCanonical = document.querySelector('link[rel="canonical"]');
      if (currentCanonical && currentCanonical.href === href) {
        currentCanonical.remove();
      }
    };
  }, [href]);
};