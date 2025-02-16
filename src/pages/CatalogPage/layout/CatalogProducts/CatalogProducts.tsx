import type { StackProps } from '@mui/system';
import type { SxPropsObj } from '@/shared/types/types';

import { memo } from 'react';
import { Stack } from '@mui/system';

import { useGetProductsQuery } from '@/services/ecommerce-api';
import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';

import { CatalogProductsGrid } from '@/pages/CatalogPage/layout/CatalogProducts/components/CatalogProductsGrid';
import { CatalogProductsTitle } from '@/pages/CatalogPage/layout/CatalogProducts/components/CatalogProductsTitle';

import { CatalogSortBy, selectQueryArgs, CatalogPagination } from '@/features/catalog-filters';

import { SuspenseWithError } from '@/components/SuspenseWithError';
import { TitleTypography } from '@/components/typography/TitleTypography';

import { useAppSelector } from '@/shared/redux/redux';

const sxProductsHeader: SxPropsObj = {
  mb: 2,
  width: 1,
  flexDirection: { zero: 'column', tablet: 'row' },
  justifyContent: { tablet: 'space-between' },
  alignItems: { zero: 'flex-start', tablet: 'center' }
};

export const CatalogProducts = memo(function CatalogProducts({ ...props }: StackProps) {
  const queryArgs = useAppSelector(selectQueryArgs);

  const { data: productsData, isError, error, isFetching } = useGetProductsQuery(queryArgs);
  const amount = productsData?.total ?? 0;

  return (
    <SuspenseWithError settings={{ isError, isFetching, error: getErrorMessage(error) }} {...props}>
      {amount ? (
        <>
          <Stack sx={sxProductsHeader}>
            <CatalogProductsTitle amount={amount} />
            <CatalogSortBy />
          </Stack>

          <CatalogProductsGrid products={productsData?.results} />
          <CatalogPagination amount={amount} />
        </>
      ) : (
        <TitleTypography>There is no products</TitleTypography>
      )}
    </SuspenseWithError>
  );
});
