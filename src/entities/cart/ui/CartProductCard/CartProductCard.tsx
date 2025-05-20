import type { BoxProps } from '@mui/system';
import type { SxStyles } from '@/shared/model/types';

import { round } from 'lodash';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Tooltip } from '@mui/material';

import { selectCountry, selectLanguage, UserFullPriceText } from '@/entities/user';
import { deleteProductAction, selectCartProductById } from '@/entities/cart/model/cart.slice';
import { CartProductQuantity } from '@/entities/cart/ui/CartProductCard/components/CartProductQuantity';

import { ImgLoad } from '@/shared/ui/components';
import { Text, BoldText, DiscountText } from '@/shared/ui/elements';
import { sxMixins } from '@/shared/lib/mui';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { SRCSET } from '@/shared/model/data';

const IMG_SELECTOR = 'product-basket__img';

const sxStyles: SxStyles = {
  container: {
    position: 'relative',
    width: 1,
    p: 2,
    boxShadow: 3,
    borderRadius: 1,
    ...sxMixins.animation(),
    ...sxMixins.mediaHover({
      boxShadow: 7,
      [`.${IMG_SELECTOR}`]: {
        transform: 'scale(1.05)'
      }
    })
  },
  column1: {
    flex: { zero: 'initial', tablet: 4, laptop: 2.5 },
    width: { zero: 1, mobile: 200, tablet: 'initial' }
  },
  column2: {
    flex: 5
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    mb: 1
  },
  // * Absolute positioned components
  discount: {
    top: '-1rem',
    left: '-1rem'
  },

  deleteProductBtn: {
    width: 'min-content',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 50,
    borderRadius: (theme) => `0 ${theme.shape.borderRadius}px 0 ${theme.shape.borderRadius}px`
  }
};

interface CartProductCardProps {
  productId: string;
  imgHeight?: BoxProps['height'];
}

export function CartProductCard({ productId, imgHeight = { zero: 300, mobile: 200 } }: CartProductCardProps) {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);
  const country = useAppSelector(selectCountry);

  const cartProductData = useAppSelector((state) => selectCartProductById(state, productId));

  const { price, discount, fractionDigits, discountedPrice } = cartProductData.pricesObj[country];

  const totalProductPrice = round(price * cartProductData.quantity, fractionDigits);
  const totalDiscountedPrice = round(discountedPrice * cartProductData.quantity, fractionDigits);

  const handleProductDelete = (): void => {
    dispatch(deleteProductAction({ productId }));
  };

  return (
    <Stack direction={{ zero: 'column', mobile: 'row' }} gap={1.5} sx={sxStyles.container}>
      <ImgLoad
        src={cartProductData.imageUrl}
        alt={cartProductData.name[language]}
        height={imgHeight}
        srcSetArr={SRCSET}
        sxContainer={sxStyles.column1}
        className={IMG_SELECTOR}
      />

      <Box sx={sxStyles.column2}>
        <BoldText variant="subtitle1" sx={sxStyles.title}>
          {cartProductData.name[language]}
        </BoldText>

        <Box>
          <UserFullPriceText price={price} discount={discount} discountedPrice={discountedPrice} />
          <Text variant="subtitle2">
            <b>Available quantity: </b>
            {cartProductData.maxQuantity}
          </Text>
          <CartProductQuantity id={cartProductData.productId} quantity={cartProductData.quantity} />
          {cartProductData.quantity > 1 && (
            <UserFullPriceText text="Final: " price={totalProductPrice} discount={discount} discountedPrice={totalDiscountedPrice} />
          )}
        </Box>
      </Box>

      {/* Absolute positioned components */}
      <DiscountText discount={discount} sx={sxStyles.discount} />

      <Tooltip title="Delete product" placement="top" sx={sxStyles.deleteProduct}>
        <Button variant="contained" onClick={handleProductDelete} sx={sxStyles.deleteProductBtn}>
          <CloseIcon fontSize="small" />
        </Button>
      </Tooltip>
    </Stack>
  );
}
