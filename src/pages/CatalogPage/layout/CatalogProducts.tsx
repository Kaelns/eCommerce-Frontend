import { Box, Typography } from '@mui/material';
import { memo, useContext } from 'react';
import { Grid, Stack } from '@mui/system';
import { TitleTypography } from '@/components/typography/TitleTypography';
import { CatalogSortBy } from '@/pages/CatalogPage/layout/CatalogSortBy';
import { SuspenseWithError } from '@/components/SuspenseWithError';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { CatalogPagination } from '@/pages/CatalogPage/layout/CatalogPagination';
import { PageSkeleton } from '@/components/skeletons/PageSkeleton';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';
import { useFetch } from '@/hooks/useFetch/useFetch';
import type { SxPropsNotArr } from '@/shared/types/types';
import { getProductsApi } from '@/services/model/products/getProductsApi';
import { convertKeyToName } from '@/utils/strings/convertKeyToName';
import { EMPTY_DATA_PRODUCTS } from '@/services/constants';

const sxProductWrapper: SxPropsNotArr = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch'
};

export const CatalogProducts = memo(function CatalogProducts(): React.ReactNode {
  const { filterState } = useContext(FilterReducerContext);
  const filterStateDebounce = useDebounce(filterState);
  const { data = EMPTY_DATA_PRODUCTS, isLoading, error } = useFetch(getProductsApi, filterStateDebounce);
  const { products, amount } = data;

  return (
    <SuspenseWithError error={error} isLoading={isLoading} width={1}>
      {products.length ? (
        <>
          <Stack
            direction={{ zero: 'column', tablet: 'row' }}
            justifyContent={{ tablet: 'space-between' }}
            alignItems={{ zero: 'flex-start', tablet: 'center' }}
            width={1}
            mb={2}
          >
            <Box>
              <TitleTypography variant="h4">{convertKeyToName(filterState.categoryKey)}</TitleTypography>
              <Typography>{amount} products</Typography>
            </Box>

            <CatalogSortBy />
          </Stack>

          <Grid container spacing={2} columns={9}>
            {products.map((product) => (
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
