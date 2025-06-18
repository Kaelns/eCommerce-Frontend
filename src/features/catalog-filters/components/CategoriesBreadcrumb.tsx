import type { Theme } from '@mui/system';
import type { SxStylesMap } from '@/shared/model/types';
import type { SxProps, BreadcrumbsProps } from '@mui/material';

import { memo, useMemo } from 'react';
import { Skeleton, Breadcrumbs } from '@mui/material';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { selectLanguage } from '@/entities/user';
import { useGetCategoriesQuery } from '@/entities/categories';

import { getCategoryName } from '@/features/catalog-filters/lib/helpers/getCategoryName';
import { convertToBreadcrumbCategories } from '@/features/catalog-filters/lib/helpers/convertToBreadcrumbCategories';
import { selectCategoryId, setCategoryIdAndNameFormAction } from '@/features/catalog-filters/model/catalogFilter.slice';

import { CasualBtn } from '@/shared/ui/elements';
import { SuspenseWithError } from '@/shared/ui/components';
import { concatSx } from '@/shared/lib/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/lib/redux';

const sxStyles: SxStylesMap = {
  btn: (theme) => ({
    color: `${theme.palette.text.secondary} !important`
  })
};

interface CategoriesBreadcrumbProps extends BreadcrumbsProps {
  btnSx?: SxProps<Theme>;
}

export const CategoriesBreadcrumb = memo(function CategoriesBreadcrumb({ btnSx, ...props }: CategoriesBreadcrumbProps) {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectCategoryId);
  const language = useAppSelector(selectLanguage);

  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  const categoriesToRender = useMemo(
    () => convertToBreadcrumbCategories(categoryId, categoriesCollection?.categoriesObj),
    [categoriesCollection, categoryId]
  );

  const setCategoryId = (categoryId: string, categoryName: string) => (): void => {
    dispatch(setCategoryIdAndNameFormAction({ categoryId, categoryName }));
  };

  return (
    <SuspenseWithError
      isLoading={isLoading}
      isError={isError}
      error={getErrorMessage(error)}
      Fallback={<Skeleton />}
      Skeleton={<Skeleton />}
    >
      <Breadcrumbs {...props}>
        {categoriesToRender.map((categoryId, index) => {
          const categoryName = getCategoryName(categoriesCollection?.categoriesObj, categoryId, language);

          return index !== categoriesToRender.length - 1 ? (
            <CasualBtn key={`active - ${categoryId}`} onClick={setCategoryId(categoryId, categoryName)} sx={btnSx}>
              {categoryName}
            </CasualBtn>
          ) : (
            <CasualBtn disabled key={`disabled - ${categoryId}`} sx={concatSx(sxStyles.btn, btnSx)}>
              {categoryName}
            </CasualBtn>
          );
        })}
      </Breadcrumbs>
    </SuspenseWithError>
  );
});
