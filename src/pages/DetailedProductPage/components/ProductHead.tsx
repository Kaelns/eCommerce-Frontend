import { Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { Title } from '@/components/typography/Title';
import { useToken } from '@/services/hooks/useToken';
import { Discount } from '@/components/typography/Discount';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { CardPrice } from '@/components/CardPrice';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { AddToBasketBtn } from '@/features/AddToBasketBtn/AddToBasketBtn';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';
import { IProduct, SxStyles } from '@/shared/types';

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
  productData: IProduct;
}

export function ProductHead({ productData, categoriesNames }: IProductHeaderProps): React.ReactNode {
  const token = useToken();

  const [lineItemId, setLineItemId] = useState('');
  const { data = INIT_BASKET } = useFetch(fetchBasket, token);

  useEffect(() => setLineItemId(findBasketProductId(data.basket, productData.id)), [data.basket, productData.id]);

  return (
    <Stack spacing={0.7} sx={sxStyles.container}>
      <Discount discount={productData.discount} sx={sxStyles.discountIcon} />

      <Title>{productData.name}</Title>
      <CardPrice
        price={productData.price}
        discount={productData.discount}
        discountedPrice={productData.discountedPrice}
      />
      <Stack direction="row" gap={0.7} flexWrap="wrap">
        {categoriesNames.map((category) => (
          <Chip key={category} label={category} />
        ))}
      </Stack>

      <AddToBasketBtn
        isAvailable={!productData.maxQuantity}
        lineItemId={lineItemId}
        productId={productData.id}
        sx={sxStyles.basketBtn}
      />
    </Stack>
  );
}
