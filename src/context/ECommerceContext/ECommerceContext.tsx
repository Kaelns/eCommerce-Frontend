import { createContext, useEffect, useState } from 'react';
import { PropsWithChildren } from '@/shared/types';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { ICategories } from '@/services/ECommerceInitApi.interface';
import { getCategories } from '@/services';

const INITIAL_CATEGORIES_CONTEXT: ICategories = {
  categoriesTree: [],
  categoriesObj: {},
  categories: []
};

export const ECommerceContext = createContext<ICategories>(INITIAL_CATEGORIES_CONTEXT);

export function ECommerceContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [categoriesObj, setCategoriesObj] = useState<ICategories>(INITIAL_CATEGORIES_CONTEXT);
  const { data } = useFetch(getCategories);

  useEffect(() => {
    setCategoriesObj((prevData) => data ?? prevData);
  }, [data]);

  return <ECommerceContext.Provider value={categoriesObj}>{children}</ECommerceContext.Provider>;
}
