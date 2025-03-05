import type { BoxProps } from '@mui/system';
import type { SxStyles } from '@/shared/model/types/types';

import { round } from 'lodash';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, inputClasses } from '@mui/material';

import { Quantity } from '@/pages/CartPage/ui/components/Quantity';

import { SRCSET_API } from '@/entities/product';
import { selectLanguage } from '@/entities/user';
import { selectCartProductById } from '@/entities/cart';
import { cartSlice } from '@/entities/cart/model/cart.slice';

import { ImgLoad } from '@/shared/ui/components/img/ImgLoad';
import { BoldTypography } from '@/shared/ui/elements/typography/BoldTypography';
import { DiscountTypography } from '@/shared/ui/elements/typography/DiscountTypography';
import { FullPriceTypography } from '@/shared/ui/components/typography/FullPriceTypography';

import { sxMixins } from '@/shared/lib/mui/mui-mixins';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

const IMG_SELECTOR = 'product-basket__img';
const IMG_HEIGHT: BoxProps['height'] = { zero: 300, tablet: 200, laptop: 250 };
const MAX_IMG_SIZE = 300;

const sxStyles: SxStyles = {
  container: (theme) => ({
    position: 'relative',
    width: 1,
    height: 1,
    p: 2,
    boxShadow: 3,
    borderRadius: 1,
    ...sxMixins.animation(),
    ...sxMixins.mediaHover({
      boxShadow: 7,
      [`.${IMG_SELECTOR}`]: {
        transform: 'scale(1.05)'
      }
    }),

    [theme.breakpoints.down('tablet')]: {
      maxWidth: 350
    }
  }),
  column1: {
    flex: { zero: 'initial', tablet: 4, laptop: 2 }
  },
  column2: {
    flex: 5
  },
  discount: {
    top: '-1rem',
    left: '-1rem'
  },
  deleteProduct: {
    position: 'absolute',
    width: 'min-content',
    top: 0,
    right: 0,
    zIndex: 50,
    borderRadius: (theme) => `0 ${theme.shape.borderRadius}px 0 ${theme.shape.borderRadius}px`
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    mb: 1
  },
  quantityInput: (theme) => ({
    [theme.breakpoints.down('tablet')]: {
      width: 1,
      maxWidth: 'initial',

      [`& ${inputClasses.input}`]: {
        p: 0.7
      }
    }
  }),
  quantityContainer: {
    width: 1,
    my: 1
  }
};

interface CartProductCardProps {
  productId: string;
  imgHeight?: {
    maxSize: number;
    height: BoxProps['height'];
  };
}

export function CartProductCard({
  productId,
  imgHeight = {
    height: IMG_HEIGHT,
    maxSize: MAX_IMG_SIZE
  }
}: CartProductCardProps) {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);

  const cartProductData = useAppSelector((state) => selectCartProductById(state, productId));

  const { height, maxSize } = imgHeight;
  const { price, discount, fractionDigits, discountedPrice } = cartProductData.pricesObj[language];

  const totalProductPrice = round(price * cartProductData.quantity, fractionDigits);
  const totalDiscountedPrice = round(discountedPrice * cartProductData.quantity, fractionDigits);

  const handleProductDelete = (): void => {
    dispatch(cartSlice.actions.deleteProductAction({ productId }));
  };

  return (
    <Stack direction={{ zero: 'column', tablet: 'row' }} gap={1.5} sx={sxStyles.container}>
      <Button variant="contained" onClick={handleProductDelete} sx={sxStyles.deleteProduct}>
        <CloseIcon />
      </Button>
      <DiscountTypography discount={discount} sx={sxStyles.discount} />

      <ImgLoad
        height={height}
        src={cartProductData.imageUrl}
        alt={cartProductData.name[language]}
        containerStyles={sxStyles.column1}
        srcset={{ srcSetArr: SRCSET_API, maxSize }}
        className={IMG_SELECTOR}
      />

      <Box sx={sxStyles.column2}>
        <BoldTypography variant="subtitle1" sx={sxStyles.title}>
          {cartProductData.name[language]}
        </BoldTypography>

        <Box>
          <FullPriceTypography price={price} discount={discount} discountedPrice={discountedPrice} />
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {cartProductData.maxQuantity}
          </Typography>
          <Quantity
            id={cartProductData.productId}
            quantity={cartProductData.quantity}
            sxInput={sxStyles.quantityInput}
            sxContainer={sxStyles.quantityContainer}
          />
          <FullPriceTypography text="Final: " price={totalProductPrice} discount={discount} discountedPrice={totalDiscountedPrice} />
        </Box>
      </Box>
    </Stack>
  );
}
