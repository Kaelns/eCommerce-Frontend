import { apiClient } from '@/services/api/ApiClient';

export function restoreUser(token: string, refreshToken: string, expirationTime = 7000): void {
  if (token && refreshToken) {
    apiClient.setTokenCache({ token, refreshToken, expirationTime });
    // await apiClient.getApiRootUserRefreshToken().
  }
}
