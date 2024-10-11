import type { PropsWithChildren } from 'react';
import { FilterReducerContextProvider } from '@/context/FilterReducerContext/FilterReducerContext';
import { ECommerceContextProvider } from '@/context/ECommerceContext/ECommerceContext';

export function ContextsProvider({ children }: PropsWithChildren): React.ReactNode {
  return (
    <FilterReducerContextProvider>
      <ECommerceContextProvider>{children}</ECommerceContextProvider>
    </FilterReducerContextProvider>
  );
}
