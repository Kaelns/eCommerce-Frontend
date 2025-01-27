import { Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { TitleTypography } from '@/components/typography/TitleTypography';
import { DiscountTypography } from '@/components/typography/DiscountTypography';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { CardPriceTypography } from '@/pages/CatalogPage/components/CardPriceTypography';
import { fetchBasket } from '@/services/%%%BADhelpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { AddProductToCartBtn } from '@/components/buttons/AddProductToCartBtn/AddProductToCartBtn';
import { findBasketProductId } from '@/services/ecommerce/helpers/cart/findBasketProductId';
import type { Product, SxStyles } from '@/shared/types/types';

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

interface IProductHeaderProps {
  categoriesNames: string[];
  productData: Product;
}

export function ProductHead({ productData, categoriesNames }: IProductHeaderProps): React.ReactNode {
  const [lineItemId, setLineItemId] = useState('');
  const { data = INIT_BASKET } = useFetch(fetchBasket, token);

  useEffect(() => setLineItemId(findBasketProductId(data.basket, productData.id)), [data.basket, productData.id]);

  return (
    <Stack spacing={0.7} sx={sxStyles.container}>
      <DiscountTypography discount={productData.discount} sx={sxStyles.discountIcon} />

      <TitleTypography>{productData.name}</TitleTypography>
      <CardPriceTypography price={productData.price} discount={productData.discount} discountedPrice={productData.discountedPrice} />
      <Stack direction="row" gap={0.7} flexWrap="wrap">
        {categoriesNames.map((category) => (
          <Chip key={category} label={category} />
        ))}
      </Stack>

      <AddProductToCartBtn isAvailable={!productData.maxQuantity} lineItemId={lineItemId} productId={productData.id} sx={sxStyles.basketBtn} />
    </Stack>
  );
}
