import type { SxPropsNotArr } from '@/shared/types/types';

import { memo } from 'react';
import { Grid, Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { useGetProductsQuery } from '@/services/ecommerce-api';
import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';

import { CatalogSortBy } from '@/pages/CatalogPage/layout/CatalogSortBy';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard';
import { CatalogPagination } from '@/pages/CatalogPage/layout/CatalogPagination';

import { SuspenseWithError } from '@/components/SuspenseWithError';
import { TitleTypography } from '@/components/typography/TitleTypography';

const sxProductWrapper: SxPropsNotArr = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch'
};

export const CatalogProducts = memo(function CatalogProducts(): React.ReactNode {
  const { data: productsData, isError, error, isLoading } = useGetProductsQuery();
  const amount = productsData?.results.length ?? 0;

  return (
    <SuspenseWithError settings={{ isError, error: getErrorMessage(error), isLoading }} width={1}>
      {amount ? (
        <>
          <Stack
            direction={{ zero: 'column', tablet: 'row' }}
            justifyContent={{ tablet: 'space-between' }}
            alignItems={{ zero: 'flex-start', tablet: 'center' }}
            width={1}
            mb={2}
          >
            <Box>
              <TitleTypography variant="h4">{/* convertKeyToName(filterState.categoryKey) */ 'Category key'}</TitleTypography>
              <Typography>{amount} products</Typography>
            </Box>

            <CatalogSortBy />
          </Stack>

          <Grid container spacing={2} columns={9}>
            {productsData?.results.map((product) => (
              <Grid key={product.id} size={{ mobile: 9, tablet: 4.5, laptop: 3 }} sx={sxProductWrapper}>
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
