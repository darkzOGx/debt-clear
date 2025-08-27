/**
 * HARDCODED CANONICAL URL - DO NOT CHANGE
 * This ensures consistent canonical URL across the entire application
 * and prevents Google's "no user-declared canonical" error
 */

// NEVER CHANGE THIS URL - IT MUST ALWAYS BE orangecountydebtcenter.com
export const CANONICAL_BASE_URL = 'https://orangecountydebtcenter.com';

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
 * Get the hardcoded canonical URL for any page
 * This function ignores the current URL and always returns the base canonical
 * to ensure all link equity flows to the main domain
 */
export const getCanonicalUrl = (path = '') => {
  // Always return the base URL regardless of path to consolidate SEO authority
  return CANONICAL_BASE_URL;
};

/**
 * Validate that a canonical URL is correct
 */
export const isValidCanonical = (url) => {
  return url === CANONICAL_BASE_URL || url === `${CANONICAL_BASE_URL}/`;
};