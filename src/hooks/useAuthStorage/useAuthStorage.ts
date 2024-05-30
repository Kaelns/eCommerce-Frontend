import { useEffect, useState } from 'react';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { keyAuthUserToken } from '@/hooks/useAuthStorage/useAuthStorage.constants';
import { IUseAuthStorageReturn } from '@/hooks/useAuthStorage/useAuthStorage.interface';

export function useAuthStorage(): IUseAuthStorageReturn {
  const { authUserToken, setAuthUserToken } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.setItem(keyAuthUserToken, authUserToken);
    };

    if (isLoading) {
      setAuthUserToken(localStorage.getItem(keyAuthUserToken) ?? '');
      setIsLoading(false);
    }
    window.addEventListener('beforeunload', handleBeforeUnload);

    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [authUserToken, isLoading, setAuthUserToken]);

  return { authUserToken, isLoading };
}
