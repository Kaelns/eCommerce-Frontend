import { Box, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { Title } from '@/components/typography/Title/Title';
import { useToken } from '@/services/hooks/useToken';
import { Discount } from '@/components/typography/Discount/Discount';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { AddToBasketBtn } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn';
import { IProductHeaderProps } from '@/pages/DetailedProductPage/components/ProductHead/ProductHead.interface';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';

import styles from './ProductHead.module.scss';

export function ProductHead({ productData, categoriesNames }: IProductHeaderProps): React.ReactNode {
  const token = useToken();

  const [lineItemId, setLineItemId] = useState('');
  const { data = INIT_BASKET } = useFetch(fetchBasket, token);

  useEffect(() => setLineItemId(findBasketProductId(data.basket, productData.id)), [data.basket, productData.id]);

  return (
    <Box className={styles.productData}>
      <Discount discount={productData.discount} className={styles.discount} />
      <Title>{productData.name}</Title>
      <CardPrice
        price={productData.price}
        discount={productData.discount}
        discountedPrice={productData.discountedPrice}
      />
      <Box className={styles.chipContainer}>
        {categoriesNames.map((category) => (
          <Chip key={category} label={category} />
        ))}
      </Box>

      <AddToBasketBtn
        availability={!productData.maxQuantity}
        lineItemId={lineItemId}
        productId={productData.id}
        className={styles.addToBasketBtn}
      />
    </Box>
  );
}
