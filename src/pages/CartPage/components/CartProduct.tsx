import type { BoxProps } from '@mui/system';
import type { SxStyles, CartProduct } from '@/shared/types/types';

import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, inputClasses } from '@mui/material';

import { SRCSET_API, FRACTION_DIGITS } from '@/services/constants';

import { Quantity } from '@/pages/CartPage/components/Quantity';
import { cartProductsSlice } from '@/pages/CartPage/slices/cartProducts.slice';
import { CardPriceTypography } from '@/pages/CatalogPage/components/CardPriceTypography';

import { useAppDispatch } from '@/app/store/store';

import { ImgLoad } from '@/components/img/ImgLoad';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { DiscountTypography } from '@/components/typography/DiscountTypography';

import { sxMixins } from '@/shared/data/mui-mixins';

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

interface IProductBasketProps {
  productData: CartProduct;
  imgHeight?: {
    maxSize: number;
    height: BoxProps['height'];
  };
}

export function CartProduct({
  productData,
  imgHeight = {
    height: IMG_HEIGHT,
    maxSize: MAX_IMG_SIZE
  }
}: IProductBasketProps): React.ReactNode {
  const dispatch = useAppDispatch();

  const { height, maxSize } = imgHeight;
  const totalProductPrice = +(productData.price * productData.quantity).toFixed(FRACTION_DIGITS);

  const handleProductDelete = (): void => {
    dispatch(cartProductsSlice.actions.deleteProductAction({ id: productData.id }));
  };

  return (
    <Stack direction={{ zero: 'column', tablet: 'row' }} gap={1.5} sx={sxStyles.container}>
      <Button variant="contained" onClick={handleProductDelete} sx={sxStyles.deleteProduct}>
        <CloseIcon />
      </Button>
      <DiscountTypography discount={productData.discount} sx={sxStyles.discount} />

      <ImgLoad
        height={height}
        src={productData.imageUrl}
        alt={productData.name}
        containerStyles={sxStyles.column1}
        srcset={{ srcSetArr: SRCSET_API, maxSize }}
        className={IMG_SELECTOR}
      />

      <Box sx={sxStyles.column2}>
        <BoldTypography variant="subtitle1" sx={sxStyles.title}>
          {productData.name}
        </BoldTypography>

        <Box>
          <CardPriceTypography price={productData.price} discount={productData.discount} discountedPrice={productData.discountedPrice} />
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {productData.maxQuantity}
          </Typography>
          <Quantity id={productData.id} quantity={productData.quantity} sxInput={sxStyles.quantityInput} sxContainer={sxStyles.quantityContainer} />
          <CardPriceTypography
            text="Final: "
            price={totalProductPrice}
            discount={productData.discount}
            discountedPrice={+(productData.discountedPrice * productData.quantity).toFixed(FRACTION_DIGITS)}
          />
        </Box>
      </Box>
    </Stack>
  );
}
