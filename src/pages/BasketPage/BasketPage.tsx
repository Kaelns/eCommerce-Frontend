import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket/ProductBasket';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { useBasket } from '@/pages/BasketPage/hooks/useBasket/useBasket';
import { Title } from '@/components/typography/Title/Title';

import styles from './BasketPage.module.scss';

export function BasketPage(): React.ReactNode {
  const { isLoading, error, prodAmount, basketProducts, dispatchBasketProducts, finalPrice } = useBasket();

  const basketKeys = useMemo(() => Object.keys(basketProducts), [basketProducts]);

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {prodAmount ? (
        <>
          <Box className={styles.productsHeader}>
            <Box>
              <Title className={styles.basket}>Product Basket</Title>
              <Typography>{prodAmount} products</Typography>
            </Box>
            <CardPrice text="Result Price:" price={finalPrice} discount={0} discountedPrice={0} />
          </Box>
          <Box className={styles.productsContainer}>
            {basketKeys.map((productKey) => (
              <ProductBasket
                key={productKey}
                productData={basketProducts[productKey]}
                dispatchBasketProducts={dispatchBasketProducts}
              />
            ))}
          </Box>
        </>
      ) : (
        <Title>There is no products</Title>
      )}
    </LoadingFetch>
  );
}
