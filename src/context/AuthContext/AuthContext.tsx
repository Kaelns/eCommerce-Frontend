import { createContext, useMemo, useState } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { IAuthState } from '@/context/AuthContext/AuthContext.interface';
import { AUTH_TOKENS, INITIAL_AUTH_CONTEXT } from '@/context/AuthContext/AuthContext.constants';

export const AuthContext = createContext<IAuthState>(INITIAL_AUTH_CONTEXT);

export function AuthContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [authTokens, setAuthTokens] = useState(AUTH_TOKENS);

  const value = useMemo(
    () => ({
      authTokens,
      setAuthTokens
    }),
    [authTokens]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
