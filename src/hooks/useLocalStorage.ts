import { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

const key = 'AUTH_USER_TOKEN';

interface IReturnType {
  authUserToken: string;
}

export function useLocalStorage(): IReturnType {
  const { authUserToken, setAuthUserToken } = useAuthContext();

  useEffect(() => {
    setAuthUserToken(localStorage.getItem(key) ?? '');
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.setItem(key, authUserToken);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [authUserToken, setAuthUserToken]);

  return { authUserToken };
}
