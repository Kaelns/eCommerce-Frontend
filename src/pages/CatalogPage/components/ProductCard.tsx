import type { SxStyles } from '@/shared/types/types';
import type { BoxProps, StackProps } from '@mui/system';
import type { ProductProjection } from '@commercetools/platform-sdk';

import { useMemo } from 'react';
import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { SRCSET_API } from '@/services/ecommerce-api';
import { findCartProductId } from '@/services/ecommerce-api/helpers/cart/findCartProductId';
import { convertToLightProduct } from '@/services/ecommerce-api/helpers/products/convertToLightProduct';

import { selectCart } from '@/pages/CartPage';
import { CardPriceTypography } from '@/pages/CatalogPage/components/CardPriceTypography';

import { ImgLoad } from '@/components/img/ImgLoad';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { LinkRouterWrapper } from '@/components/wrappers/LinkRouterWrapper';
import { DiscountTypography } from '@/components/typography/DiscountTypography';
import { AddProductToCartBtn } from '@/components/buttons/AddProductToCartBtn/AddProductToCartBtn';

import { Paths } from '@/shared/data/enums';
import { sxMixins } from '@/shared/data/mui-mixins';
import { useAppSelector } from '@/shared/redux/redux';

const ICON_WIDTH = '2.2rem';
const ICON_WIDTH_TABLET = '2.8rem';
const BORDER_RADIUS = '1.5rem';
const IMG_SELECTOR = 'product-card__img';

const MAX_IMG_SIZE = 400;
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
  containerMaxWidth?: StackProps['maxWidth'];
  imgHeight?: {
    maxSize: number;
    height: BoxProps['height'];
  };
}

export function ProductCard({
  product,
  imgHeight = {
    height: IMG_HEIGHT,
    maxSize: MAX_IMG_SIZE
  },
  containerMaxWidth = CONTAINER_MAX_WIDTH
}: IProductCardProps): React.ReactNode {
  const cartData = useAppSelector(selectCart);
  const data = useMemo(() => convertToLightProduct(product), [product]);
  const pathToProduct = `${Paths.DETAILED_PRODUCT}/${data.key}`;
  const shortedDescription = data.description.slice(0, data.description.indexOf(' ', 90));
  const { height, maxSize } = imgHeight;

  return (
    <LinkRouterWrapper to={pathToProduct} display="flex" justifyContent="center" height={1} width={1}>
      <Stack spacing={3} height={1} width={1} maxWidth={containerMaxWidth} sx={sxStyles.cardContainer}>
        {!!cartData && (
          <AddProductToCartBtn
            isIconBtn
            productId={data.id}
            isAvailable={!data.maxQuantity}
            lineItemId={findCartProductId(cartData.lineItems, data.id)}
            sx={sxStyles.basketBtn}
            iconSx={sxStyles.basketIcon}
            progressSx={sxStyles.basketProgress}
          />
        )}

        <DiscountTypography discount={data.discount} sx={sxStyles.discount} />

        <ImgLoad height={height} src={data.imageUrl} alt={data.name} className={IMG_SELECTOR} srcset={{ srcSetArr: SRCSET_API, maxSize }} />

        <Box>
          <BoldTypography variant="subtitle1" sx={sxStyles.title}>
            {data.name}
          </BoldTypography>
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {data.maxQuantity}
          </Typography>
          <CardPriceTypography price={data.price} discount={data.discount} discountedPrice={data.discountedPrice} />
          <Typography>{shortedDescription}...</Typography>
        </Box>
      </Stack>
    </LinkRouterWrapper>
  );
}
