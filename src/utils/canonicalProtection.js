/**
 * CANONICAL URL PROTECTION UTILITY - DISABLED
 * This module is disabled to allow page-specific canonical URLs
 * which prevent Google indexing issues
 */

import { CANONICAL_BASE_URL } from '../constants/canonical';

/**
 * DISABLED - Page-specific canonical URLs now used
 * This function is disabled to allow proper page-specific canonicals
 */
export const protectCanonicalUrl = () => {
  // DISABLED: This protection conflicts with page-specific canonical URLs
  // which are needed to prevent "Alternate page with proper canonical tag" issues
  return;
  
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
 * DISABLED - Initialize canonical protection on page load
 */
export const initCanonicalProtection = () => {
  // DISABLED: Allow page-specific canonical URLs
  return;
};

/**
 * DISABLED - React hook version for protecting canonicals
 */
export const useCanonicalProtection = () => {
  // DISABLED: Allow page-specific canonical URLs
  return;
};