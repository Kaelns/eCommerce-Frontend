import { Box, Grid, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Title } from '@/components/typography/Title/Title';
import { SortBy } from '@/pages/CatalogPage/components/SortBy/SortBy';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { fetchProducts } from '@/services/helpers/fetchProducts/fetchProducts';
import { EMPTY_DATA_PRODUCTS } from '@/services/helpers/fetchProducts/fetchProducts.constants';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { useFetchWithParams } from '@/hooks/useFetch/useFetchWithParams';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard/ProductCard';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';

import styles from './Products.module.scss';

export function Products(): React.ReactNode {
  const { filterState } = useContext(FilterReducerContext);
  const filterStateDebounce = useDebounce(filterState);
  const { data, isLoading, error } = useFetchWithParams(fetchProducts, filterStateDebounce);
  const { products, amount } = data ?? EMPTY_DATA_PRODUCTS;

  useEffect(() => console.log(filterStateDebounce), [filterStateDebounce]);

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {products.length ? (
        <>
          <Box className={styles.productsHeader}>
            <Box>
              <Title>{fromKeyToName(filterState.categoryKey)}</Title>
              <Typography>{amount} products</Typography>
            </Box>
            <SortBy />
          </Box>
          <Grid container spacing={2} columns={9}>
            {products.map((product) => (
              <Grid key={product.id} item xs={9} sm={4.5} md={3} className={styles.productWrapper}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Title>There is no products</Title>
      )}
    </LoadingFetch>
  );
}
