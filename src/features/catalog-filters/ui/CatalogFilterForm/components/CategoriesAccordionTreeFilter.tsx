import { memo, useCallback } from 'react';

import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';
import { LANGUAGE, useGetCategoriesQuery } from '@/services/ecommerce-api';

import { AccordionTree } from '@/features/accordion-tree';
import { getCategoryName } from '@/features/catalog-filters/helpers/getCategoryName';
import { selectIsCurrentCategoryIdForm, setCategoryIdAndNameFormAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { SuspenseWithError } from '@/components/SuspenseWithError';

import { useAppDispatch } from '@/shared/redux/redux';

//  TODO accordion tree
export const CategoriesAccordionTreeFilter = memo(function CategoriesAccordionTreeFilter(): React.ReactNode {
  const dispatch = useAppDispatch();

  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  const setClickedElem = useCallback(
    (categoryId: string) =>
      (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        const categoryName = getCategoryName(categoriesCollection?.categoriesObj, categoryId, LANGUAGE);
        dispatch(setCategoryIdAndNameFormAction({ categoryId, categoryName }));
      },
    [categoriesCollection?.categoriesObj, dispatch]
  );

  return (
    <SuspenseWithError settings={{ isError, isLoading, error: getErrorMessage(error) }}>
      <AccordionTree
        treeData={categoriesCollection?.categoriesTree ?? []}
        reduxElemIdData={{ isCurrentIdSelector: selectIsCurrentCategoryIdForm, setClickedElemMemoized: setClickedElem }}
      />
    </SuspenseWithError>
  );
});
