import { createContext, PropsWithChildren, useState, useMemo } from 'react';
import { IBasketContext } from '@/context/BasketContext/BasketContext.interface';
import { INITIAL_BASKET_CONTEXT } from '@/context/BasketContext/BasketContext.constants';

export const BasketContext = createContext<IBasketContext>(INITIAL_BASKET_CONTEXT);

export function BasketContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [basketState, setBasketState] = useState(0);

  // Todo: remove if doesn't need

  const value = useMemo(
    () => ({
      basketState,
      setBasketState
    }),
    [basketState, setBasketState]
  );

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
}
