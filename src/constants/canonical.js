/**
 * HARDCODED CANONICAL URL - DO NOT CHANGE
 * This ensures consistent canonical URL across the entire application
 * and prevents Google's "no user-declared canonical" error
 */

// CANONICAL BASE URL - MUST MATCH THE DOMAIN WHERE SITE IS HOSTED  
export const CANONICAL_BASE_URL = 'https://www.orangecountydebtcenter.com';

// Hardcoded canonical URLs for all major pages
export const CANONICAL_URLS = {
  HOME: `${CANONICAL_BASE_URL}/`,
  BLOG: `${CANONICAL_BASE_URL}/blog`,
  FAQ: `${CANONICAL_BASE_URL}/faq`,
  ABOUT: `${CANONICAL_BASE_URL}/about-us`,
  PRIVACY: `${CANONICAL_BASE_URL}/privacy-policy`,
  TERMS: `${CANONICAL_BASE_URL}/terms-of-service`,
  CONTACT: `${CANONICAL_BASE_URL}/contact`,
  RESOURCES: `${CANONICAL_BASE_URL}/resources`,
  // All pages should use the base URL as canonical to consolidate link equity
  DEFAULT: CANONICAL_BASE_URL
};

/**
 * Get the correct canonical URL for any page
 * Returns page-specific canonical URLs to prevent Google indexing issues
 */
export const getCanonicalUrl = (path = '') => {
  // If no path provided, return base URL
  if (!path || path === '/' || path === '') {
    return `${CANONICAL_BASE_URL}/`;
  }
  
  // Clean the path and ensure it starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return the full canonical URL for the specific page
  return `${CANONICAL_BASE_URL}${cleanPath}`;
};

/**
 * Validate that a canonical URL is correct
 */
export const isValidCanonical = (url) => {
  return url === CANONICAL_BASE_URL || url === `${CANONICAL_BASE_URL}/`;
};