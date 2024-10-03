import { AuthMiddlewareOptions, HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';

export const PROJECT_KEY = 'reactive';
export const CLIENT_ID = 'Ljr0VLnwZ93HwjwGkrPWbGJ7';
export const CLIENT_SECRET = 'f743NjdSAVIvPCFqh5r-0yVkU0s61F5A';
export const AUTH_HOST = 'https://auth.europe-west1.gcp.commercetools.com';
export const API_HOST = 'https://api.europe-west1.gcp.commercetools.com';
export const SCOPES = [
  'manage_project:reactive',
  'view_audit_log:reactive',
  'view_api_clients:reactive',
  'manage_api_clients:reactive'
];

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: API_HOST,
  fetch
} as const;

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: AUTH_HOST,
  projectKey: PROJECT_KEY,
  credentials: {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  },
  scopes: SCOPES,
  fetch
} as const;
