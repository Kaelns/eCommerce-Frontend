import type { SxStyles } from '@/shared/types/types';
import type { BoxProps, StackProps } from '@mui/system';
import type { ProductProjection } from '@commercetools/platform-sdk';

import { useMemo } from 'react';
import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { SRCSET_API } from '@/services/ecommerce-api';
import { convertToLightProduct } from '@/services/ecommerce-api/helpers/products/convertToLightProduct';

import { CardPriceTypography } from '@/components/typography/CardPriceTypography';
import { ProductToCartBtn } from '@/pages/CatalogPage/features/ProductCard/components/ProductToCartBtn';

import { ImgLoad } from '@/components/img/ImgLoad';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { LinkRouterWrapper } from '@/components/wrappers/LinkRouterWrapper';
import { DiscountTypography } from '@/components/typography/DiscountTypography';

import { Paths } from '@/shared/data/enums';
import { sxMixins } from '@/shared/data/mui-mixins';

const IMG_SELECTOR = 'product-card__img';

const MAX_IMG_SIZE = 400;
const IMG_HEIGHT: BoxProps['height'] = { zero: 400, laptop: 200 };
const CONTAINER_MAX_WIDTH: StackProps['maxWidth'] = { zero: 400, laptop: 300 };

const sxStyles: SxStyles = {
  linkWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 1,
    width: 1
  },
  cardContainer: {
    position: 'relative',
    height: 1,
    width: 1,
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
  }
};

interface ProductCardProps {
  product: ProductProjection;
  containerMaxWidth?: StackProps['maxWidth'];
  imgHeight?: {
    maxSize: number;
    height: BoxProps['height'];
  };
}

export function ProductCard({
  product,
  imgHeight = { height: IMG_HEIGHT, maxSize: MAX_IMG_SIZE },
  containerMaxWidth = CONTAINER_MAX_WIDTH
}: ProductCardProps) {
  const productData = useMemo(() => convertToLightProduct(product), [product]);

  const shortedDescription = productData.description.slice(0, productData.description.indexOf(' ', 90));

  const { height, maxSize } = imgHeight;

  return (
    <LinkRouterWrapper to={`${Paths.DETAILED_PRODUCT}/${productData.key}`} maxWidth={containerMaxWidth} sx={sxStyles.linkWrapper}>
      <Stack spacing={3} maxWidth={containerMaxWidth} sx={sxStyles.cardContainer}>
        <ProductToCartBtn productId={productData.id} isAvailable={!productData.maxQuantity} />

        <DiscountTypography discount={productData.discount} sx={sxStyles.discount} />

        <ImgLoad
          height={height}
          src={productData.imageUrl}
          alt={productData.name}
          className={IMG_SELECTOR}
          srcset={{ srcSetArr: SRCSET_API, maxSize }}
        />

        <Box>
          <BoldTypography variant="subtitle1" sx={sxStyles.title}>
            {productData.name}
          </BoldTypography>
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {productData.maxQuantity}
          </Typography>
          <CardPriceTypography price={productData.price} discount={productData.discount} discountedPrice={productData.discountedPrice} />
          <Typography>{shortedDescription}...</Typography>
        </Box>
      </Stack>
    </LinkRouterWrapper>
  );
}
