import { Box, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { fetchProducts } from '@/services/helpers/fetchProducts/fetchProducts';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { Title } from '@/components/typography/Title/Title';
import { IProductsProps } from '@/pages/CatalogPage/components/Products/Products.interface';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { EMPTY_DATA_PRODUCTS } from '@/services/helpers/fetchProducts/fetchProducts.constants';
import { SortBy } from '@/pages/CatalogPage/components/SortBy/SortBy';

import styles from './Products.module.scss';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard/ProductCard';

export function Products({ className }: IProductsProps): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const { data, isLoading, error } = useFetch(fetchProducts);
  const { products, amount } = data ?? EMPTY_DATA_PRODUCTS;

  return (
    <LoadingFetch error={error} isLoading={isLoading} skeleton={<PageSkeleton />}>
      {data ? (
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
