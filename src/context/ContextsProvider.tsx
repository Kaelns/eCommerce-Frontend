import { PropsWithChildren } from 'react';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { FilterReducerContextProvider } from '@/context/FilterReducerContext/FilterReducerContext';
import { ECommerceContextProvider } from '@/context/ECommerceContext/ECommerceContext';

export function ContextsProvider({ children }: PropsWithChildren): React.ReactNode {
  return (
    <AuthContextProvider>
      <FilterReducerContextProvider>
        <ECommerceContextProvider>{children}</ECommerceContextProvider>
      </FilterReducerContextProvider>
    </AuthContextProvider>
  );
}
