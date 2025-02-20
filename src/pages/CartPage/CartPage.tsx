import type { SxStyles } from '@/shared/model/types/types';

import { Stack } from '@mui/system';

// import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { calculateDiscounted } from '@/pages/BasketPage/helpers/calculateDiscounted';
// import { ErrorComponent } from '@/components/ErrorComponent';
// import { ProductBasket } from '@/pages/BasketPage/components/ProductBasket';
// import { CardPrice } from '@/components/CardPrice';
// import { BtnCasual } from '@/components/buttons/BtnCasual';
// import { Promocode } from '@/pages/BasketPage/components/Promocode';
// import { Paths } from '@/shared/constants';
// import cartImg from '@/shared/assets/cart.png';
// import { useAlertText } from '@/features/AlertText/useAlertText';
// import { useDebounceCache } from '@/hooks/useDebounceCash/useDebounceCash';
// import { cartSlice } from '@/pages/BasketPage/cart.slice';
// import { postQuantity } from '@/pages/BasketPage/helpers/postQuantity';
// import { setPrevBasketOnError } from '@/pages/BasketPage/helpers/setPrevBasketOnError';
// import { deleteCartApi } from '@/services/model/cart/deleteCartApi';
// import { authSliceSelectors } from '@/store/slices/auth.slice';
// import { useAppDispatch, useAppSelector } from '@/store/store';
// import { cartProductsSlice } from '@/pages/BasketPage/cartProducts.slice';
import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';

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

export function CartPage() {
  // const dispatch = useAppDispatch();
  // const isLogged = useAppSelector(authSliceSelectors.selectIsLoggedAuthToken);

  // const cartProducts = useAppSelector(cartProductsSlice.selectors.selectCartProducts);
  // const discount = useAppSelector(cartSlice.selectors.selectDiscount);
  // const finalPrice = useAppSelector(cartProductsSlice.selectors.selectFinalPrice);
  // const productQuantity = useAppSelector(cartProductsSlice.selectors.selectProductQuantity);

  // const deletionSignal = useAppSelector(cartSlice.selectors.selectDeletionSignal);
  // const [cartProductsCopy, prevBasketProd] = useDebounceCache(cartProducts, `${isLogged}${deletionSignal}`);

  // const { showAlert } = useAlertText();

  // // useEffect(() => {
  // //   dispatch(getCartApi());
  // // }, [dispatch, authToken, isPromocode, deletionSignal]);

  // useEffect(() => {
  //   const postOrRevertOnError = async (): Promise<void> => {
  //     const errorMessage = await postQuantity(prevBasketProd, cartProductsCopy, isLogged);
  //     if (errorMessage) {
  //       setPrevBasketOnError(showAlert, dispatchCartProducts, errorMessage, prevBasketProd);
  //     }
  //   };
  //   postOrRevertOnError();
  // }, [prevBasketProd, cartProductsCopy, showAlert, isLogged]);

  // const handlePromocode = useCallback(
  //   (isApplied: boolean) => dispatch(cartSlice.actions.setIsPromocodeAction(isApplied)),
  //   [dispatch]
  // );

  // const handleDelete = useCallback(() => {
  //   dispatch(deleteCartApi());
  // }, [dispatch]);

  // const basketKeys = useMemo(() => Object.keys(cartProducts), [cartProducts]);
  // const discountedPrice = useMemo(() => calculateDiscounted(finalPrice, discount), [discount, finalPrice]);

  return (
    <Stack sx={sxStyles.stackContainer}>
      <TitleTypography>Basket</TitleTypography>
      {/* {productQuantity ? (
        <>
          <Box sx={sxStyles.header}>
            <Box>
              <Title>Product Basket</Title>
              <Typography>{productQuantity} products</Typography>
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
            <Promocode handlePromocode={handlePromocode} sx={sxStyles.promocode} />
          </Box>

          <Stack sx={sxStyles.stackContainer}>
            {basketKeys.map((productKey) => (
              <ProductBasket key={productKey} productData={cartProducts[productKey]} />
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
      )} */}
    </Stack>
  );
}
