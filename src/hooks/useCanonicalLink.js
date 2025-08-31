import { useEffect } from 'react';
import { getCanonicalUrl } from '../constants/canonical';

/**
 * PAGE-SPECIFIC CANONICAL HOOK
 * Sets the correct canonical URL for each page to prevent Google indexing issues
 * Uses the current page path to generate proper canonical URLs
 */
export const useCanonicalLink = (href) => {
  useEffect(() => {
    // Remove any existing canonical links first
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Use page-specific canonical URL or current path
    const currentPath = window.location.pathname;
    const canonicalUrl = href ? getCanonicalUrl(href) : getCanonicalUrl(currentPath);
    
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      const currentCanonical = document.querySelector('link[rel="canonical"]');
      if (currentCanonical && currentCanonical.href === canonicalUrl) {
        currentCanonical.remove();
      }
    };
  }, [href]); // Re-run when href changes
};