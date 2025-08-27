/**
 * CANONICAL URL PROTECTION UTILITY
 * This module ensures the canonical URL can never be changed from orangecountydebtcenter.com
 */

import { CANONICAL_BASE_URL } from '../constants/canonical';

/**
 * Protect and enforce the hardcoded canonical URL
 * This function runs continuously to prevent any canonical URL modifications
 */
export const protectCanonicalUrl = () => {
  const HARDCODED_CANONICAL = CANONICAL_BASE_URL;
  
  // Function to ensure canonical is correct
  const enforceCanonical = () => {
    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    
    // Remove all but keep one with correct URL
    canonicals.forEach((canonical, index) => {
      if (index > 0 || canonical.href !== HARDCODED_CANONICAL) {
        canonical.remove();
      }
    });
    
    // Ensure exactly one canonical exists with correct URL
    let correctCanonical = document.querySelector(`link[rel="canonical"][href="${HARDCODED_CANONICAL}"]`);
    if (!correctCanonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = HARDCODED_CANONICAL;
      document.head.appendChild(link);
    }
  };
  
  // Run immediately
  enforceCanonical();
  
  // Monitor for changes
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      enforceCanonical();
    });
    
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'rel']
    });
    
    return () => observer.disconnect();
  }
  
  return () => {};
};

/**
 * Initialize canonical protection on page load
 */
export const initCanonicalProtection = () => {
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', protectCanonicalUrl);
    } else {
      protectCanonicalUrl();
    }
  }
};

/**
 * React hook version for protecting canonicals
 */
export const useCanonicalProtection = () => {
  if (typeof window !== 'undefined') {
    React.useEffect(() => {
      const cleanup = protectCanonicalUrl();
      return cleanup;
    }, []);
  }
};