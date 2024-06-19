import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ErrorComponent } from '@/components/ErrorComponent/ErrorComponent';
import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket/ProductBasket';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { useBasket } from '@/pages/BasketPage/hooks/useBasket/useBasket';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { Title } from '@/components/typography/Title/Title';

import styles from './BasketPage.module.scss';
import cartImg from '@/assets/cart.png';

export function BasketPage(): React.ReactNode {
  const { isLoading, error, prodAmount, basketProducts, dispatchBasketProducts, finalPrice } = useBasket();

  const basketKeys = useMemo(() => Object.keys(basketProducts), [basketProducts]);

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {prodAmount ? (
        <>
          <Box className={styles.header}>
            <Box>
              <Title>Product Basket</Title>
              <Typography>{prodAmount} products</Typography>
              <CardPrice text="Result Price:" price={finalPrice} discount={0} discountedPrice={0} />
            </Box>
            <BtnCasual variant="contained" className={styles.deleteProduct}>
              <DeleteForeverIcon />
            </BtnCasual>
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
        <ErrorComponent
          message="Your Cart is empty"
          src={cartImg}
          alt="Cart image"
          goTo={ROUTES.CATALOG}
          goToText="Go shopping"
        />
      )}
    </LoadingFetch>
  );
}
