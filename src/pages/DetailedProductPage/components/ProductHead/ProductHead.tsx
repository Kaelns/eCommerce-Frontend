import { Box, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { IProductHeaderProps } from '@/pages/DetailedProductPage/components/ProductHead/ProductHead.interface';
import { AddToBasketBtn } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn';
import { Discount } from '@/components/typography/Discount/Discount';
import { Title } from '@/components/typography/Title/Title';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';

import styles from './ProductHead.module.scss';

export function ProductHead({ productData, categoriesNames }: IProductHeaderProps): React.ReactNode {
  const [lineItemId, setLineItemId] = useState('');
  const { data = INIT_BASKET } = useFetch(fetchBasket);

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
      <AddToBasketBtn lineItemId={lineItemId} productId={productData.id} className={styles.addToBasketBtn} />
    </Box>
  );
}
