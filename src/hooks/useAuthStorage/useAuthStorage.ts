import { useEffect, useState } from 'react';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { KEY_ANON_TOKEN, KEY_AUTH_USER_TOKEN } from '@/hooks/useAuthStorage/useAuthStorage.constants';
import { IUseAuthStorageReturn } from '@/hooks/useAuthStorage/useAuthStorage.interface';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export function useAuthStorage(): IUseAuthStorageReturn {
  const { authTokens, setAuthTokens } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.setItem(KEY_AUTH_USER_TOKEN, authTokens.token);
      localStorage.setItem(KEY_ANON_TOKEN, authTokens.anonToken);
    };

    const initAnonCart = async (): Promise<void> => {
      const token = localStorage.getItem(KEY_AUTH_USER_TOKEN) ?? '';
      let anonToken = localStorage.getItem(KEY_ANON_TOKEN);
      if (!anonToken) {
        anonToken = await eCommerceAPI.createAnonymousCart();
      }
      setAuthTokens({ token, anonToken });
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
