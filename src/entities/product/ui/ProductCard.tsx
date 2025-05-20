import type { SxStyles } from '@/shared/model/types';
import type { BoxProps, StackProps } from '@mui/system';
import type { ProductProjection } from '@commercetools/platform-sdk';

import { useMemo } from 'react';
import { Stack } from '@mui/system';
import { Box } from '@mui/material';

import { AddProductToCartBtn } from '@/entities/cart';
import { selectCountry, selectLanguage, UserFullPriceText } from '@/entities/user';
import { convertToLightProduct } from '@/entities/product/lib/helpers/objects/convertToLightProduct';

import { Text, BoldText, DiscountText } from '@/shared/ui/elements';
import { ImgLoad, LinkAbsoluteWrapper } from '@/shared/ui/components';
import { sxMixins } from '@/shared/lib/mui';
import { useAppSelector } from '@/shared/lib/redux';
import { Paths, SRCSET } from '@/shared/model/data';

const IMG_SELECTOR = 'product-card__img';

const sxStyles: SxStyles = {
  cardContainer: {
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

  fullPriceContainer: {
    mb: 0.6
  },

  // * Position absolute

  discount: (theme) => ({
    top: '-1rem',
    right: '-1rem',
    [theme.breakpoints.down('tablet')]: { right: 'auto', left: '-1rem' }
  }),

  cartBtn: (theme) => ({
    position: 'absolute',
    inset: '0 auto auto 0',
    width: 'fit-content',
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
  imgHeight?: BoxProps['height'];
  containerMaxWidth?: StackProps['maxWidth'];
}

export function ProductCard({
  product,
  imgHeight = { zero: 400, laptop: 250 },
  containerMaxWidth = { zero: 400, laptop: 350 }
}: ProductCardProps) {
  const language = useAppSelector(selectLanguage);
  const country = useAppSelector(selectCountry);
  const productData = useMemo(() => convertToLightProduct(product), [product]);

  const { price, discount, discountedPrice } = productData.pricesObj[country];

  const shortedDescription = useMemo(
    () => (productData.description ? productData.description[language].slice(0, productData.description[language].indexOf(' ', 100)) : ''),
    [productData.description, language]
  );

  return (
    <Stack spacing={3} maxWidth={containerMaxWidth} sx={[{ position: 'relative' }, sxStyles.cardContainer]}>
      <LinkAbsoluteWrapper to={`${Paths.DETAILED_PRODUCT}/${productData.key}`} maxWidth={containerMaxWidth} sx={sxStyles.linkWrapper} />
      <ImgLoad src={productData.imageUrl} alt={productData.name[language]} height={imgHeight} srcSetArr={SRCSET} className={IMG_SELECTOR} />

      <Box>
        <BoldText isPositioned variant="subtitle1" sx={sxStyles.title}>
          {productData.name[language]}
        </BoldText>
        <Text isPositioned>
          <b>Available quantity: </b>
          {productData.maxQuantity}
        </Text>
        <UserFullPriceText
          isPositioned
          price={price}
          discount={discount}
          discountedPrice={discountedPrice}
          sxContainer={sxStyles.fullPriceContainer}
        />
        <Text isPositioned>{shortedDescription}...</Text>
      </Box>

      {/* Position absolute */}
      <AddProductToCartBtn
        isIconBtn
        isAvailable={!productData.maxQuantity}
        productId={productData.id}
        sx={sxStyles.cartBtn}
        sxIcon={sxStyles.cartIcon}
      />

      <DiscountText isPositioned discount={discount} sx={sxStyles.discount} />
    </Stack>
  );
}
