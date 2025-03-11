import type { SxStyles } from '@/shared/model/types';
import type { BoxProps, StackProps } from '@mui/system';
import type { ProductProjection } from '@commercetools/platform-sdk';

import { useMemo } from 'react';
import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { selectLanguage } from '@/entities/user';
import { AddProductToCartBtn } from '@/entities/cart';
import { SRCSET_API } from '@/entities/product/model/product.constants';
import { convertToLightProduct } from '@/entities/product/lib/helpers/objects/convertToLightProduct';

import { BoldTypography, DiscountTypography } from '@/shared/ui/elements';
import { ImgLoad, LinkRouterWrapper, FullPriceTypography } from '@/shared/ui/components';
import { sxMixins } from '@/shared/lib/mui';
import { useAppSelector } from '@/shared/lib/redux';
import { Paths } from '@/shared/model/data';

const IMG_SELECTOR = 'product-card__img';

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

  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  // * Position absolute

  discount: (theme) => ({
    top: '-1rem',
    right: '-1rem',
    [theme.breakpoints.down('tablet')]: { right: 'auto', left: '-1rem' }
  }),

  cartBtn: (theme) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'fit-content',
    zIndex: 50,
    borderRadius: `${theme.shape.borderRadius}px 0 1.5rem 0`,

    [theme.breakpoints.down('tablet')]: {
      p: 1,
      inset: 'auto 0 0 auto',
      borderTopLeftRadius: '1.5rem',
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }),

  cartIcon: {
    fontSize: { zero: '2.8rem', tablet: '2.2rem' }
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
  imgHeight = { height: { zero: 400, laptop: 200 }, maxSize: 400 },
  containerMaxWidth = { zero: 400, laptop: 300 }
}: ProductCardProps) {
  const language = useAppSelector(selectLanguage);
  const productData = useMemo(() => convertToLightProduct(product), [product]);

  const shortedDescription = productData.description ? productData.description[language].slice(0, 90) : '';

  const { height, maxSize } = imgHeight;
  const { price, discount, discountedPrice } = productData.pricesObj[language];

  return (
    <LinkRouterWrapper to={`${Paths.DETAILED_PRODUCT}/${productData.key}`} maxWidth={containerMaxWidth} sx={sxStyles.linkWrapper}>
      <Stack spacing={3} maxWidth={containerMaxWidth} sx={sxStyles.cardContainer}>
        <ImgLoad
          height={height}
          src={productData.imageUrl}
          alt={productData.name[language]}
          className={IMG_SELECTOR}
          srcset={{ srcSetArr: SRCSET_API, maxSize }}
        />

        <Box>
          <BoldTypography variant="subtitle1" sx={sxStyles.title}>
            {productData.name[language]}
          </BoldTypography>
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {productData.maxQuantity}
          </Typography>
          <FullPriceTypography price={price} discount={discount} discountedPrice={discountedPrice} />
          {Boolean(shortedDescription) ?? <Typography>{shortedDescription}...</Typography>}
        </Box>

        {/* Position absolute */}
        <AddProductToCartBtn
          isIconBtn
          isAvailable={!productData.maxQuantity}
          productId={productData.id}
          sx={sxStyles.cartBtn}
          iconSx={sxStyles.cartIcon}
        />

        <DiscountTypography discount={discount} sx={sxStyles.discount} />
      </Stack>
    </LinkRouterWrapper>
  );
}
