import { Box, Typography } from '@mui/material';
import { memo, useContext } from 'react';
import { Grid, Stack } from '@mui/system';
import { TitleTypography } from '@/components/typography/TitleTypography';
import { ProductSortBy } from '@/pages/CatalogPage/components/ProductSortBy';
import { SuspenseWithError } from '@/components/SuspenseWithError';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { ProductPagination } from '@/pages/CatalogPage/components/ProductPagination';
import { PageSkeleton } from '@/components/skeleton/PageSkeleton';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';
import { useFetch } from '@/hooks/useFetch/useFetch';
import type { SxPropsNotArr } from '@/shared/types/types';
import { getProductsApi } from '@/services/model/products/getProductsApi';
import { convertKeyToName } from '@/utils/convert/convertKeyToName';
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
    <SuspenseWithError error={error} isLoading={isLoading} Skeleton={PageSkeleton} width={1}>
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

            <ProductSortBy />
          </Stack>

          <Grid container spacing={2} columns={9}>
            {products.map((product) => (
              <Grid key={product.id} size={{ mobile: 9, tablet: 4.5, laptop: 3 }} sx={sxProductWrapper}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          <ProductPagination amount={amount} />
        </>
      ) : (
        <TitleTypography>There is no products</TitleTypography>
      )}
    </SuspenseWithError>
  );
});
