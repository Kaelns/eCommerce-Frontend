import { Box, Typography } from '@mui/material';
import { Title } from '@/components/typography/Title/Title';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket/ProductBasket';
import { EMPTY_DATA_PRODUCTS } from '@/services/data/productsResponce/productsResponce.constants';

import styles from './BasketPage.module.scss';

export function BasketPage(): React.ReactNode {
  const { data, isLoading, error } = useFetch(fetchBasket);
  const { products, amount } = data ?? EMPTY_DATA_PRODUCTS;

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {products.length ? (
        <>
          <Box className={styles.productsHeader}>
            <Box>
              <Title className={styles.basket}>Product Basket</Title>
              <Typography>{amount} products</Typography>
            </Box>
          </Box>
          <Box>
            {products.map((product) => (
              <ProductBasket key={product.id} product={product} />
            ))}
          </Box>
        </>
      ) : (
        <Title>There is no products</Title>
      )}
    </LoadingFetch>
  );
}
