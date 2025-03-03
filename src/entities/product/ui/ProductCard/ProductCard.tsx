import type { BoxProps, StackProps } from '@mui/system';
import type { SxStyles } from '@/shared/model/types/types';
import type { ProductProjection } from '@commercetools/platform-sdk';

import { useMemo } from 'react';
import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { selectLanguage } from '@/entities/user';
import { SRCSET_API } from '@/entities/product/model/product.constants';
import { ProductToCartBtn } from '@/entities/product/ui/ProductCard/components/ProductToCartBtn';
import { convertToLightProduct } from '@/entities/product/lib/helpers/objects/convertToLightProduct';

import { ImgLoad } from '@/shared/ui/components/img/ImgLoad';
import { BoldTypography } from '@/shared/ui/elements/typography/BoldTypography';
import { LinkRouterWrapper } from '@/shared/ui/components/wrappers/LinkRouterWrapper';
import { DiscountTypography } from '@/shared/ui/elements/typography/DiscountTypography';
import { FullPriceTypography } from '@/shared/ui/components/typography/FullPriceTypography';

import { Paths } from '@/shared/model/data/enums';
import { sxMixins } from '@/shared/lib/mui/mui-mixins';
import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

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
  const language = useAppSelector(selectLanguage);
  const productData = useMemo(() => convertToLightProduct(product), [product]);

  const shortedDescription = productData.description ? productData.description[language].slice(0, 90) : '';

  const { height, maxSize } = imgHeight;
  const { price, discount, discountedPrice } = productData.pricesObj[language];

  return (
    <LinkRouterWrapper to={`${Paths.DETAILED_PRODUCT}/${productData.key}`} maxWidth={containerMaxWidth} sx={sxStyles.linkWrapper}>
      <Stack spacing={3} maxWidth={containerMaxWidth} sx={sxStyles.cardContainer}>
        <ProductToCartBtn productId={productData.id} isAvailable={!productData.maxQuantity} />

        <DiscountTypography discount={discount} sx={sxStyles.discount} />

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
      </Stack>
    </LinkRouterWrapper>
  );
}
