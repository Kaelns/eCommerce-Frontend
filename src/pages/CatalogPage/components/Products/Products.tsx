import { Box, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { Title } from '@/components/typography/Title/Title';
import { SortBy } from '@/pages/CatalogPage/components/SortBy/SortBy';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { fetchProducts } from '@/services/helpers/fetchProducts/fetchProducts';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { EMPTY_DATA_PRODUCTS } from '@/services/data/productsResponce/productsResponce.constants';
import { ProductPagination } from '@/pages/CatalogPage/components/ProductPagination/ProductPagination';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard/ProductCard';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { useToken } from '@/services/hooks/useToken';

import styles from './Products.module.scss';

export function Products(): React.ReactNode {
  const { filterState } = useContext(FilterReducerContext);
  const filterStateDebounce = useDebounce(filterState);
  const { data = EMPTY_DATA_PRODUCTS, isLoading, error } = useFetch(fetchProducts, filterStateDebounce);
  const { products, amount } = data;

  const token = useToken();
  const { data: cartData = INIT_BASKET } = useFetch(fetchBasket, token);

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
                <ProductCard product={product} cartData={cartData} />
              </Grid>
            ))}
          </Grid>
          <ProductPagination amount={amount} />
        </>
      ) : (
        <Title>There is no products</Title>
      )}
    </LoadingFetch>
  );
}
