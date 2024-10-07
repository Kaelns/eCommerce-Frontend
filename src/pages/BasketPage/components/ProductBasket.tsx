import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, inputClasses } from '@mui/material';
import { BoxProps, Stack } from '@mui/system';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { Discount } from '@/components/typography/Discount';
import { CardPrice } from '@/components/CardPrice';
import { Quantity } from '@/pages/BasketPage/components/Quantity';
import { FRACTION_DIGITS, SRCSET_API } from '@/services/ECommerceInitApi.constants';
import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProduct, SxStyles } from '@/shared/types';
import { sxMixins } from '@/features/MuiTheme/mixins';
import { ImgLoad } from '@/components/ImgLoad';

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
  productData: IBasketProduct;
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
  imgHeight?: {
    height: BoxProps['height'];
    maxSize: number;
  };
}

export function ProductBasket({
  productData,
  dispatchBasketProducts,
  imgHeight = {
    height: IMG_HEIGHT,
    maxSize: MAX_IMG_SIZE
  }
}: IProductBasketProps): React.ReactNode {
  const { height, maxSize } = imgHeight;

  const handleDelete = (): void => {
    dispatchBasketProducts({ type: BasketState.DELETE, payload: { id: productData.id } });
  };

  return (
    <Stack direction={{ zero: 'column', tablet: 'row' }} gap={1.5} sx={sxStyles.container}>
      <Button variant="contained" onClick={handleDelete} sx={sxStyles.deleteProduct}>
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
            dispatchBasketProducts={dispatchBasketProducts}
            sxInput={sxStyles.quantityInput}
            sxContainer={sxStyles.quantityContainer}
          />
          <CardPrice
            text="Final: "
            price={+(productData.price * productData.quantity).toFixed(FRACTION_DIGITS)}
            discount={productData.discount}
            discountedPrice={+(productData.discountedPrice * productData.quantity).toFixed(FRACTION_DIGITS)}
          />
        </Box>
      </Box>
    </Stack>
  );
}
