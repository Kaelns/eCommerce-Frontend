import type { Theme } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';
import type { SxProps, BreadcrumbsProps } from '@mui/material';

import { memo, useMemo } from 'react';
import { Skeleton, Breadcrumbs } from '@mui/material';

import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';
import { LANGUAGE, useGetCategoriesQuery } from '@/services/ecommerce-api';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { getCategoryName } from '@/features/catalog-filters/helpers/getCategoryName';
import { selectCategoryId, setCategoryIdAndNameFormAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { CasualBtn } from '@/components/buttons/CasualBtn';
import { SuspenseWithError } from '@/components/SuspenseWithError';

import { useAppSelector, useAppDispatch } from '@/shared/redux/redux';
import { convertToBreadcrumbCategories } from '@/shared/helpers/convertToBreadcrumbCategories';

const sxStyles: SxStyles = {
  btn: (theme) => ({
    color: `${theme.palette.text.secondary} !important`
  })
};

interface IBreadcrumbProps extends BreadcrumbsProps {
  btnSx?: SxProps<Theme>;
}

export const CategoriesBreadcrumb = memo(function CategoriesBreadcrumb({ btnSx = {}, ...props }: IBreadcrumbProps) {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectCategoryId);

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
      settings={{ error: getErrorMessage(error), isError, isLoading }}
      Fallback={<Skeleton />}
      Skeleton={<Skeleton />}
    >
      <Breadcrumbs {...props}>
        {categoriesToRender.map((categoryId, index) => {
          const categoryName = getCategoryName(categoriesCollection?.categoriesObj, categoryId, LANGUAGE);

          return index !== categoriesToRender.length - 1 ? (
            <CasualBtn key={categoryId} onClick={setCategoryId(categoryId, categoryName)} sx={btnSx}>
              {categoryName}
            </CasualBtn>
          ) : (
            <CasualBtn disabled key={categoryId} sx={[sxStyles.btn, ...convertSxToArr(btnSx)]}>
              {categoryName}
            </CasualBtn>
          );
        })}
      </Breadcrumbs>
    </SuspenseWithError>
  );
});
