import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket/ProductBasket';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { FinalPrice } from '@/pages/BasketPage/components/FinalPrice/FinalPrice';
import { useBasket } from '@/pages/BasketPage/hooks/useBasket/useBasket';
import { Title } from '@/components/typography/Title/Title';

import styles from './BasketPage.module.scss';

export function BasketPage(): React.ReactNode {
  const { isLoading, error, amount, basketProducts, dispatchBasketProducts, finalPrice, setFinalPrice } = useBasket();

  const basketKeys = useMemo(() => Object.keys(basketProducts), [basketProducts]);

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {amount ? (
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
