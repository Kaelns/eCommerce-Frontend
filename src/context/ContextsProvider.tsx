import { PropsWithChildren } from 'react';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { FilterReducerContextProvider } from '@/context/FilterReducerContext/FilterReducerContext';
import { ECommerceContextProvider } from '@/context/ECommerceContext/ECommerceContext';
import { AlertTextContextProvider } from '@/context/AlertTextContext/AlertTextContext';

export function ContextsProvider({ children }: PropsWithChildren): React.ReactNode {
  return (
    <AuthContextProvider>
      <FilterReducerContextProvider>
        <AlertTextContextProvider>
          <ECommerceContextProvider>{children}</ECommerceContextProvider>
        </AlertTextContextProvider>
      </FilterReducerContextProvider>
    </AuthContextProvider>
  );
}
