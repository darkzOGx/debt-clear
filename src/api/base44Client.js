import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication optional for standalone deployment
export const base44 = createClient({
  appId: "6894f74339bca4dfd61efb7e", 
  requiresAuth: false // Set to false for Vercel deployment
});
