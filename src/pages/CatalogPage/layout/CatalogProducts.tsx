import type { StackProps } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';

import { memo } from 'react';
import { Grid, Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { useGetProductsQuery } from '@/services/ecommerce-api';
import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';

import { ProductCard } from '@/pages/CatalogPage/features/ProductCard';
import { CatalogSortBy } from '@/pages/CatalogPage/components/CatalogSortBy';
import { selectCategoryName } from '@/pages/CatalogPage/features/CatalogFilterForm';
import { CatalogPagination } from '@/pages/CatalogPage/components/CatalogPagination';

import { SuspenseWithError } from '@/components/SuspenseWithError';
import { TitleTypography } from '@/components/typography/TitleTypography';

import { useAppSelector } from '@/shared/redux/redux';

const sxStyles: SxStyles = {
  productsHeader: {
    mb: 2,
    width: 1,
    flexDirection: { zero: 'column', tablet: 'row' },
    justifyContent: { tablet: 'space-between' },
    alignItems: { zero: 'flex-start', tablet: 'center' }
  },
  sxProductWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
};

export const CatalogProducts = memo(function CatalogProducts({ ...props }: StackProps) {
  // TODO delete and change on queryArgs.
  const categoryName = useAppSelector(selectCategoryName);

  // TODO add filters
  // get queryArgs from catalogSlice and inside filterForm add apply btn with thunk
  const { data: productsData, isError, error, isLoading } = useGetProductsQuery();
  const amount = productsData?.total ?? 0;

  return (
    <SuspenseWithError settings={{ isError, error: getErrorMessage(error), isLoading }} {...props}>
      {amount ? (
        <>
          <Stack sx={sxStyles.productsHeader}>
            <Box>
              <TitleTypography variant="h4">{categoryName}</TitleTypography>
              <Typography>{amount} products</Typography>
            </Box>
            <CatalogSortBy />
          </Stack>

          <Grid container spacing={2} columns={9}>
            {productsData?.results.map((product) => (
              <Grid key={product.id} size={{ mobile: 9, tablet: 4.5, laptop: 3 }} sx={sxStyles.sxProductWrapper}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          <CatalogPagination amount={amount} />
        </>
      ) : (
        <TitleTypography>There is no products</TitleTypography>
      )}
    </SuspenseWithError>
  );
});
