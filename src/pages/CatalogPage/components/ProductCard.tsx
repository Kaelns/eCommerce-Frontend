import { Box, Typography } from '@mui/material';
import { BoxProps, Stack, StackProps } from '@mui/system';
import { ProductProjection } from '@commercetools/platform-sdk';
import { Paths } from '@/features/Router/Router.constants';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { Discount } from '@/components/typography/Discount';
import { ImgLoad } from '@/components/ImgLoad';
import { CardPrice } from '@/components/CardPrice';
import { LinkRouter } from '@/components/LinkRouter';
import { AddToBasketBtn } from '@/features/AddToBasketBtn/AddToBasketBtn';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';
import { SxStyles } from '@/shared/types';
import { sxMixins } from '@/features/MuiTheme/mixins';
import { IBasketResponce } from '@/services/helpers/fetchBasket/fetchBasket.interface';
import { getLightProduct } from '@/services/helpers/getLightProduct';

const ICON_WIDTH = '2.2rem';
const ICON_WIDTH_TABLET = '2.8rem';
const BORDER_RADIUS = '1.5rem';
const IMG_SELECTOR = 'product-card__img';

const IMG_HEIGHT: BoxProps['height'] = { zero: 400, laptop: 200 };
const CONTAINER_MAX_WIDTH: StackProps['maxWidth'] = { zero: 400, laptop: 300 };

const sxStyles: SxStyles = {
  cardContainer: {
    position: 'relative',
    py: 2,
    px: 1,
    cursor: 'pointer',
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

  discount: (theme) => ({
    top: '-1rem',
    right: '-1rem',
    [theme.breakpoints.down('tablet')]: { right: 'auto', left: '-1rem' }
  }),

  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  basketBtn: (theme) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'fit-content',
    zIndex: 50,
    borderRadius: `${theme.shape.borderRadius}px 0 ${BORDER_RADIUS} 0`,

    [theme.breakpoints.down('tablet')]: {
      p: 1,
      inset: 'auto 0 0 auto',
      borderTopLeftRadius: BORDER_RADIUS,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }),

  basketIcon: {
    fontSize: { zero: ICON_WIDTH_TABLET, tablet: ICON_WIDTH }
  },

  basketProgress: {
    width: { zero: ICON_WIDTH_TABLET, tablet: ICON_WIDTH },
    height: { zero: ICON_WIDTH_TABLET, tablet: ICON_WIDTH }
  }
};

interface IProductCardProps {
  product: ProductProjection;
  cartData?: IBasketResponce;
  imgHeight?: BoxProps['height'];
  containerMaxWidth?: StackProps['maxWidth'];
}

export function ProductCard({
  product,
  cartData,
  imgHeight = IMG_HEIGHT,
  containerMaxWidth = CONTAINER_MAX_WIDTH
}: IProductCardProps): React.ReactNode {
  const data = getLightProduct(product);
  const pathToProduct = `${Paths.DETAILED_PRODUCT}/${data.key}`;
  const shortedDescription = data.description.slice(0, data.description.indexOf(' ', 90));

  return (
    <LinkRouter to={pathToProduct} display="flex" justifyContent="center" height={1} width={1}>
      <Stack spacing={3} height={1} width={1} maxWidth={containerMaxWidth} sx={sxStyles.cardContainer}>
        {!!cartData && (
          <AddToBasketBtn
            isIconBtn
            productId={data.id}
            isAvailable={!data.maxQuantity}
            lineItemId={findBasketProductId(cartData.basket, data.id)}
            sx={sxStyles.basketBtn}
            iconSx={sxStyles.basketIcon}
            progressSx={sxStyles.basketProgress}
          />
        )}

        <Discount discount={data.discount} sx={sxStyles.discount} />
        <ImgLoad height={imgHeight} src={data.imageUrl} alt={data.name} className={IMG_SELECTOR} />

        <Box>
          <TypographyBold variant="subtitle1" sx={sxStyles.title}>
            {data.name}
          </TypographyBold>
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {data.maxQuantity}
          </Typography>
          <CardPrice price={data.price} discount={data.discount} discountedPrice={data.discountedPrice} />
          <Typography>{shortedDescription}...</Typography>
        </Box>
      </Stack>
    </LinkRouter>
  );
}
