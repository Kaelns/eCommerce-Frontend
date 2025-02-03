import type { Theme } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';
import type { SxProps, BreadcrumbsProps } from '@mui/material';

import { memo, useMemo } from 'react';
import { Button, Breadcrumbs } from '@mui/material';

import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';
import { LANGUAGE, useGetCategoriesQuery } from '@/services/ecommerce-api';

import { NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/constants';
import { selectCategoryId } from '@/pages/CatalogPage/features/CatalogFilterForm';
import { convertToBreadcrumb } from '@/pages/CatalogPage/features/CategoriesBreadcrumb/helpers';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { SuspenseWithError } from '@/components/SuspenseWithError';

import { useAppSelector } from '@/shared/redux/redux';
import { NO_CATEGORY_NAME } from '@/shared/data/constants';

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
  // const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectCategoryId);

  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  const categoriesToRender = useMemo(
    () => (categoryId !== NO_CATEGORY && categoriesCollection ? convertToBreadcrumb(categoryId, categoriesCollection.categoriesTree) : [NO_CATEGORY]),
    [categoriesCollection, categoryId]
  );

  const setCategoryId = (categoryId: string, categoryName: string) => (): void => {
    console.log('🚀 ~ CategoriesBreadcrumb ~ categoryId: string, categoryName: string:', categoryId, categoryName);

    // dispatch(setCategoryIdAndNameAction({ categoryId, categoryName }));
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
