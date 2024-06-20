import { PropsWithChildren } from 'react';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { FilterReducerContextProvider } from '@/context/FilterReducerContext/FilterReducerContext';
import { ECommerceContextProvider } from '@/context/ECommerceContext/ECommerceContext';
import { AlertTextContextProvider } from '@/context/AlertTextContext/AlertTextContext';
import { BasketContextProvider } from '@/context/BasketContext/BasketContext';

export function ContextsProvider({ children }: PropsWithChildren): React.ReactNode {
  return (
    <AuthContextProvider>
      <FilterReducerContextProvider>
        <AlertTextContextProvider>
          <BasketContextProvider>
            <ECommerceContextProvider>{children}</ECommerceContextProvider>
          </BasketContextProvider>
        </AlertTextContextProvider>
      </FilterReducerContextProvider>
    </AuthContextProvider>
  );
}
