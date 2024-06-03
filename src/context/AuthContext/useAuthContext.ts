import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { IAuthState } from '@/context/AuthContext/AuthContext.interface';

export function useAuthContext(): IAuthState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Something went wrong');
  }

  return context;
}
