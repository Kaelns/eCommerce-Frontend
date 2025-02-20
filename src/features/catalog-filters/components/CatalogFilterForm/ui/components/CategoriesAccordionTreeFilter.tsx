import { memo, useCallback } from 'react';

import { selectLanguage } from '@/entities/user';
import { useGetCategoriesQuery } from '@/entities/categories';

import { AccordionTree } from '@/features/AccordionTree';
import { getCategoryName } from '@/features/catalog-filters/helpers/getCategoryName';
import { selectIsCurrentCategoryIdForm, setCategoryIdAndNameFormAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { SuspenseWithError } from '@/shared/ui/components/conditional/SuspenseWithError';

import { getErrorMessage } from '@/shared/api/ecommerce-api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

//  TODO accordion tree
export const CategoriesAccordionTreeFilter = memo(function CategoriesAccordionTreeFilter(): React.ReactNode {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);

  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  const setClickedElem = useCallback(
    (categoryId: string) =>
      (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        const categoryName = getCategoryName(categoriesCollection?.categoriesObj, categoryId, language);
        dispatch(setCategoryIdAndNameFormAction({ categoryId, categoryName }));
      },
    [categoriesCollection?.categoriesObj, dispatch, language]
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
