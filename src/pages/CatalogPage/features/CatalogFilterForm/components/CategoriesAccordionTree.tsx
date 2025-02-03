import { useGetCategoriesQuery } from '@/services/ecommerce-api';
import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';

import { AccordionTree } from '@/features/accordion-tree';

import { SuspenseWithError } from '@/components/SuspenseWithError';

//  TODO accordion tree
export const CategoriesAccordionTree = (): React.ReactNode => {
  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  return (
    <SuspenseWithError settings={{ error: getErrorMessage(error), isError, isLoading }}>
      <AccordionTree treeData={categoriesCollection?.categoriesTree ?? []} />
    </SuspenseWithError>
  );
};
