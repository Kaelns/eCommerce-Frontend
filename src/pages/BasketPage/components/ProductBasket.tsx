import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, inputClasses } from '@mui/material';
import type { BoxProps } from '@mui/system';
import { Stack } from '@mui/system';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { Discount } from '@/components/typography/Discount';
import { CardPrice } from '@/components/CardPrice';
import { Quantity } from '@/pages/BasketPage/components/Quantity';
import { FRACTION_DIGITS, SRCSET_API } from '@/services/constants';
import type { ICartProduct, SxStyles } from '@/shared/types';
import { sxMixins } from '@/features/mui-theme/mixins';
import { ImgLoad } from '@/components/ImgLoad';
import { cartProductsSlice } from '@/pages/BasketPage/cartProducts.slice';
import { useAppDispatch } from '@/store/redux';

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
  productData: ICartProduct;
  imgHeight?: {
    height: BoxProps['height'];
    maxSize: number;
  };
}

export function ProductBasket({
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
      <Discount discount={productData.discount} sx={sxStyles.discount} />

      <ImgLoad
        height={height}
        src={productData.imageUrl}
        alt={productData.name}
        containerStyles={sxStyles.column1}
        srcset={{ srcSetArr: SRCSET_API, maxSize }}
        className={IMG_SELECTOR}
      />

      <Box sx={sxStyles.column2}>
        <TypographyBold variant="subtitle1" sx={sxStyles.title}>
          {productData.name}
        </TypographyBold>

        <Box>
          <CardPrice
            price={productData.price}
            discount={productData.discount}
            discountedPrice={productData.discountedPrice}
          />
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {productData.maxQuantity}
          </Typography>
          <Quantity
            id={productData.id}
            quantity={productData.quantity}
            sxInput={sxStyles.quantityInput}
            sxContainer={sxStyles.quantityContainer}
          />
          <CardPrice
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
