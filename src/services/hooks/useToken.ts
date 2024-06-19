import { useAuthContext } from '@/context/AuthContext/useAuthContext';

export function useToken(): string {
  const { authTokens } = useAuthContext();
  return authTokens.token || authTokens.anonToken;
}
