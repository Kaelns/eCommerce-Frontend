import { useContext } from 'react';
import { AuthContext, IAuthState } from '@/context/AuthContext/AuthContext';

export function useAuthContext(): IAuthState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Something went wrong with AuthContextProvider or you don't use context within contextProvider");
  }

  return context;
}
