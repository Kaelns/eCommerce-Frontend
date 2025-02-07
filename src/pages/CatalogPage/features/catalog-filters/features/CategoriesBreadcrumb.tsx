import type { Theme } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';
import type { SxProps, BreadcrumbsProps } from '@mui/material';

import { memo, useMemo } from 'react';
import { Button, Breadcrumbs } from '@mui/material';

import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';
import { LANGUAGE, useGetCategoriesQuery } from '@/services/ecommerce-api';

import { selectCategoryId, setCategoryIdAndNameAction } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { SuspenseWithError } from '@/components/SuspenseWithError';

import { useAppSelector, useAppDispatch } from '@/shared/redux/redux';
import { NO_CATEGORY, NO_CATEGORY_NAME } from '@/shared/data/constants';
import { convertToBreadcrumb } from '@/shared/helpers/convertToBreadcrumb';

const sxStyles: SxStyles = {
  btn: (theme) => ({
    textTransform: 'none',
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
    () => (categoryId !== NO_CATEGORY && categoriesCollection ? convertToBreadcrumb(categoryId, categoriesCollection.categoriesTree) : [NO_CATEGORY]),
    [categoriesCollection, categoryId]
  );

  const setCategoryId = (categoryId: string, categoryName: string) => (): void => {
    dispatch(setCategoryIdAndNameAction({ categoryId, categoryName }));
  };

  return (
    <SuspenseWithError settings={{ error: getErrorMessage(error), isError, isLoading }}>
      <Breadcrumbs {...props}>
        {categoriesToRender.map((categoryId, index) => {
          const categoryName =
            categoriesCollection && categoriesCollection.categoriesObj[categoryId]?.name
              ? categoriesCollection.categoriesObj[categoryId].name[LANGUAGE]
              : NO_CATEGORY_NAME;

          return index !== categoriesToRender.length - 1 ? (
            <Button key={categoryId} onClick={setCategoryId(categoryId, categoryName)} sx={btnSx}>
              {categoryName}
            </Button>
          ) : (
            <Button disabled key={categoryId} sx={[sxStyles.btn, ...convertSxToArr(btnSx)]}>
              {categoryName}
            </Button>
          );
        })}
      </Breadcrumbs>
    </SuspenseWithError>
  );
});
