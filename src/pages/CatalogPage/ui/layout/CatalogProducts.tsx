import type { StackProps } from '@mui/system';
import type { SxStylesObj } from '@/shared/model/types';

import { memo } from 'react';
import { Stack } from '@mui/system';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { CatalogProductsGrid } from '@/pages/CatalogPage/ui/components/CatalogProductsGrid';
import { CatalogProductsTitle } from '@/pages/CatalogPage/ui/components/CatalogProductsTitle';

import { useGetProductsQuery } from '@/entities/product';

import { CatalogSortBy, selectQueryArgs, CatalogPagination } from '@/features/catalog-filters';

import { TitleText } from '@/shared/ui/elements';
import { SuspenseWithError } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

const sxProductsHeader: SxStylesObj = {
  mb: 2,
  width: 1,
  flexDirection: { zero: 'column', tablet: 'row' },
  justifyContent: { tablet: 'space-between' },
  alignItems: { zero: 'stretch', tablet: 'flex-end' }
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
        // TODO add better message
        <TitleText>There is no products</TitleText>
      )}
    </SuspenseWithError>
  );
});
