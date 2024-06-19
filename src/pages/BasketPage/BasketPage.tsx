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
import { Promocode } from '@/pages/BasketPage/components/Promocode/Promocode';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { Title } from '@/components/typography/Title/Title';

import styles from './BasketPage.module.scss';
import cartImg from '@/assets/cart.png';
import { calculateDiscounted } from '@/pages/BasketPage/helpers/calculateDiscounted';

export function BasketPage(): React.ReactNode {
  const {
    isLoading,
    error,
    discount,
    prodAmount,
    finalPrice,
    isDiscounted,
    basketProducts,
    handleDelete,
    handlePromocode,
    dispatchBasketProducts
  } = useBasket();

  const basketKeys = useMemo(() => Object.keys(basketProducts), [basketProducts]);
  const discountedPrice = useMemo(() => calculateDiscounted(finalPrice, discount), [discount, finalPrice]);

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} className={styles.productsContainer}>
      {prodAmount ? (
        <>
          <Box className={styles.header}>
            <Box>
              <Title>Product Basket</Title>
              <Typography>{prodAmount} products</Typography>
              <CardPrice
                text="Result Price:"
                price={finalPrice}
                discount={discount}
                discountedPrice={discountedPrice}
              />
            </Box>
            <BtnCasual variant="contained" className={styles.deleteProduct} onClick={handleDelete}>
              <DeleteForeverIcon />
            </BtnCasual>
            <Promocode
              className={styles.promocodeContainer}
              promocode={isDiscounted}
              handlePromocode={handlePromocode}
            />
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
