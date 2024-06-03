import { createContext, useMemo, useState } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { IAuthState } from '@/context/AuthContext/AuthContext.interface';
import { INITIAL_AUTH_CONTEXT } from '@/context/AuthContext/AuthContext.constants';

export const AuthContext = createContext<IAuthState>(INITIAL_AUTH_CONTEXT);

export function AuthContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [authUserToken, setAuthUserToken] = useState('');

  const value = useMemo(
    () => ({
      authUserToken,
      setAuthUserToken
    }),
    [authUserToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
