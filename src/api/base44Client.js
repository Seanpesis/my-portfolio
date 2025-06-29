import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "686123aa6866d6a54a85f85a", 
  requiresAuth: true // Ensure authentication is required for all operations
});
