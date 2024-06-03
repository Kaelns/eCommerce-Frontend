import { createContext, useMemo, useReducer } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { filterReducer } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer';
import { INITIAL_FILTER_VALUE } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { IFilterReducer } from '@/context/FilterReducerContext/FilterReducerContext.interface';
import { INITIAL_FILTER_CONTEXT } from '@/context/FilterReducerContext/FilterReducerContext.constants';

export const FilterReducerContext = createContext<IFilterReducer>(INITIAL_FILTER_CONTEXT);

export function FilterReducerContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [filterState, dispatchFilterState] = useReducer(filterReducer, INITIAL_FILTER_VALUE);

  const value = useMemo(
    () => ({
      filterState,
      dispatchFilterState
    }),
    [filterState, dispatchFilterState]
  );

  return <FilterReducerContext.Provider value={value}>{children}</FilterReducerContext.Provider>;
}
