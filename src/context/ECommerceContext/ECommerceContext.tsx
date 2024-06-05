import { createContext, useEffect, useState } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { ICategoriesObj } from '@/context/ECommerceContext/ECommerceContext.interface';
import { INITIAL_CATEGORIES_CONTEXT } from '@/context/ECommerceContext/ECommerceContext.constants';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { fetchCategories } from '@/hooks/useFetch/useFetch.helpers';

export const ECommerceContext = createContext<ICategoriesObj>(INITIAL_CATEGORIES_CONTEXT);

export function ECommerceContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [categoriesObj, setCategoriesObj] = useState<ICategoriesObj>(INITIAL_CATEGORIES_CONTEXT);
  const { data } = useFetch(fetchCategories);

  useEffect(() => {
    setCategoriesObj((prevData) => data ?? prevData);
  }, [data]);

  return <ECommerceContext.Provider value={categoriesObj}>{children}</ECommerceContext.Provider>;
}
