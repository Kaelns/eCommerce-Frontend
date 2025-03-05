import type { SxStyles } from '@/shared/model/types/types';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Title } from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Promocode } from '@/pages/CartPage/ui/components/Promocode';

import { selectLanguage } from '@/entities/user';
import { resetCartAction, selectCartFinalPriceObj, selectCartProductQuantity } from '@/entities/cart';

import { CasualBtn } from '@/shared/ui/elements/buttons/CasualBtn';
import { FullPriceTypography } from '@/shared/ui/components/typography/FullPriceTypography';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

const sxStyles: SxStyles = {
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

export function CartHeader() {
  const dispatch = useAppDispatch();

  const language = useAppSelector(selectLanguage);
  const productQuantity = useAppSelector(selectCartProductQuantity);
  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) => selectCartFinalPriceObj(state, language));

  const handleDeleteCart = () => {
    dispatch(resetCartAction());
  };

  return (
    <Box sx={sxStyles.header}>
      <Box>
        <Title>Product Basket</Title>
        <Typography>{productQuantity} products</Typography>
        <FullPriceTypography
          text="Result Price:"
          price={finalPrice}
          discount={percentageDiscount}
          discountedPrice={finalPriceWithDiscount}
        />
      </Box>

      <CasualBtn variant="contained" onClick={handleDeleteCart} sx={sxStyles.deleteBasket}>
        <DeleteForeverIcon />
      </CasualBtn>
      <Promocode sx={sxStyles.promocode} />
    </Box>
  );
}
