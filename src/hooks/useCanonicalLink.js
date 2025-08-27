import { useEffect } from 'react';
import { getCanonicalUrl } from '../constants/canonical';

/**
 * HARDCODED CANONICAL HOOK
 * This hook ALWAYS sets the canonical URL to https://orangecountydebtcenter.com
 * regardless of what href is passed to it. This prevents dynamic canonical URLs
 * and ensures Google always sees the same canonical domain.
 */
export const useCanonicalLink = (href) => {
  useEffect(() => {
    // Remove any existing canonical links first
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // ALWAYS use the hardcoded canonical URL - ignore any passed href
    // This consolidates all SEO authority to the main domain
    const canonicalUrl = getCanonicalUrl();
    
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
  }, []); // No dependencies - canonical never changes
};