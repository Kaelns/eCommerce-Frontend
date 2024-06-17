import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket/ProductBasket';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { FinalPrice } from '@/pages/BasketPage/components/FinalPrice/FinalPrice';
import { useBasket } from '@/pages/BasketPage/components/hooks/useBasket/useBasket';
import { Title } from '@/components/typography/Title/Title';

import styles from './BasketPage.module.scss';
import { getCart } from '@/services/getCart';

export function BasketPage(): React.ReactNode {
  const { isLoading, error, amount, basketProducts, setBasketProducts, finalPrice, setFinalPrice } = useBasket();

  const basketKeys = useMemo(() => Object.keys(basketProducts), [basketProducts]);

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {basketProducts.length ? (
        <>
          <Box className={styles.productsHeader}>
            <Box>
              <Title className={styles.basket}>Product Basket</Title>
              <Typography>{amount} products</Typography>
            </Box>
            <FinalPrice finalPrice={finalPrice} />
          </Box>
          <Box className={styles.productsContainer}>
            {basketKeys.map((productKey) => (
              <ProductBasket key={productKey} productData={basketProducts[productKey]} />
            ))}
          </Box>
        </>
      ) : (
        <Title>There is no products</Title>
      )}
    </LoadingFetch>
  );
}
