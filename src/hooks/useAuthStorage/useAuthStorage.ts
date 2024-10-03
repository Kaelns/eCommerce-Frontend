import { useEffect, useState } from 'react';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { KEY_AUTH_USER_TOKEN, REFRESH_KEY_AUTH_USER_TOKEN } from '@/hooks/useAuthStorage/useAuthStorage.constants';
import { IUseAuthStorageReturn } from '@/hooks/useAuthStorage/useAuthStorage.interface';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export function useAuthStorage(): IUseAuthStorageReturn {
  const { authTokens, setAuthTokens } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.setItem(KEY_AUTH_USER_TOKEN, authTokens.token);
      localStorage.setItem(REFRESH_KEY_AUTH_USER_TOKEN, authTokens.refreshToken);
    };

    const initAnonCart = async (): Promise<void> => {
      const token = localStorage.getItem(KEY_AUTH_USER_TOKEN) ?? '';
      const refreshToken = localStorage.getItem(REFRESH_KEY_AUTH_USER_TOKEN) ?? '';
      if (token && refreshToken) {
        setAuthTokens((prev) => ({ ...prev, token, refreshToken }));
        eCommerceAPI.restoreUser(token, refreshToken);
      }
    };

    if (isLoading) {
      initAnonCart();
      setIsLoading(false);
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [authTokens, isLoading, setAuthTokens]);

  return { authTokens, isLoading };
}
