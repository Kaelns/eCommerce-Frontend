import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Stack } from '@mui/system';
import { calculateDiscounted } from '@/pages/BasketPage/helpers/calculateDiscounted';
import { ErrorComponent } from '@/components/ErrorComponent';
import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket';
import { LoadingFetch } from '@/components/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton';
import { CardPrice } from '@/components/CardPrice';
import { useBasket } from '@/pages/BasketPage/hooks/useBasket/useBasket';
import { BtnCasual } from '@/components/buttons/BtnCasual';
import { Promocode } from '@/pages/BasketPage/components/Promocode';
import { SxStyles } from '@/shared/types';
import { Paths } from '@/features/Router/Router.constants';
import { Title } from '@/components/typography/Title';
import cartImg from '@/assets/cart.png';

const sxStyles: SxStyles = {
  stackContainer: {
    alignItems: { zero: 'center', tablet: 'initial' },
    gap: 2,
    mb: 2
  },
  header: {
    position: 'relative',
    gap: 4,
    alignSelf: 'stretch'
  },
  promocode: {
    mt: -0.5
  },
  deleteBasket: {
    position: 'absolute',
    width: 'min-content',
    top: 0,
    right: 0,
    zIndex: 50,
    borderRadius: (theme) => `0 ${theme.shape.borderRadius}px 0 ${theme.shape.borderRadius}px`
  }
};

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
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton} sx={sxStyles.stackContainer}>
      {prodAmount ? (
        <>
          <Box sx={sxStyles.header}>
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

            <BtnCasual variant="contained" onClick={handleDelete} sx={sxStyles.deleteBasket}>
              <DeleteForeverIcon />
            </BtnCasual>
            <Promocode promocode={isDiscounted} handlePromocode={handlePromocode} sx={sxStyles.promocode} />
          </Box>

          <Stack sx={sxStyles.stackContainer}>
            {basketKeys.map((productKey) => (
              <ProductBasket
                key={productKey}
                productData={basketProducts[productKey]}
                dispatchBasketProducts={dispatchBasketProducts}
              />
            ))}
          </Stack>
        </>
      ) : (
        <ErrorComponent
          message="Your Cart is empty"
          src={cartImg}
          alt="Cart image"
          goTo={Paths.CATALOG}
          goToText="Go shopping"
        />
      )}
    </LoadingFetch>
  );
}
