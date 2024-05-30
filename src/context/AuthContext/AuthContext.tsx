import { Dispatch, createContext, useMemo, useState } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export interface IAuthState {
  authUserToken: string;
  setAuthUserToken: Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthState | null>(null);

interface IProps {}

export function AuthContextProvider({ children }: PropsWithChildren<IProps>): React.ReactNode {
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
