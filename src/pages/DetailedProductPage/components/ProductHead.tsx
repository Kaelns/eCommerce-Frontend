import type { Product, SxStyles } from '@/shared/model/types/types';

import { useState } from 'react';
import { Stack } from '@mui/system';
import { Chip } from '@mui/material';

import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';
import { DiscountTypography } from '@/shared/ui/elements/typography/DiscountTypography';
import { FullPriceTypography } from '@/shared/ui/components/typography/FullPriceTypography';
import { AddProductToCartBtn } from '@/shared/ui/components/buttons/AddProductToCartBtn/AddProductToCartBtn';

const sxStyles: SxStyles = {
  container: (theme) => ({
    position: 'relative',
    width: '32.5%',

    [theme.breakpoints.down('tablet')]: {
      pb: 1.5,
      pr: 1.5,
      float: 'left',
      width: '45%'
    },

    [theme.breakpoints.down(500)]: {
      pr: 0,
      float: 'none',
      width: 1
    }
  }),
  discountIcon: {
    top: -1,
    right: -1
  },
  basketBtn: {
    mt: 1
  }
};

interface ProductHeaderProps {
  productData: Product;
  categoriesNames: string[];
}

export function ProductHead({ productData, categoriesNames }: ProductHeaderProps) {
  const [lineItemId /* , setLineItemId */] = useState('');
  // const { data: cartData = INIT_BASKET } = useFetch(fetchBasket, token);

  // useEffect(() => setLineItemId(findBasketProductId(cartData.basket, productData.id)), [cartData.basket, productData.id]);

  return (
    <Stack spacing={0.7} sx={sxStyles.container}>
      <DiscountTypography discount={productData.discount} sx={sxStyles.discountIcon} />

      <TitleTypography>{productData.name}</TitleTypography>
      <FullPriceTypography price={productData.price} discount={productData.discount} discountedPrice={productData.discountedPrice} />
      <Stack direction="row" gap={0.7} flexWrap="wrap">
        {categoriesNames.map((category) => (
          <Chip key={category} label={category} />
        ))}
      </Stack>

      <AddProductToCartBtn isAvailable={!productData.maxQuantity} cartProductId={lineItemId} productId={productData.id} sx={sxStyles.basketBtn} />
    </Stack>
  );
}
