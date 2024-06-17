import { Box, Chip } from '@mui/material';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { IProductHeaderProps } from '@/pages/DetailedProductPage/components/ProductHead/ProductHead.interface';
import { AddToBasketBtn } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn';
import { Discount } from '@/components/typography/Discount/Discount';
import { Title } from '@/components/typography/Title/Title';

import styles from './ProductHead.module.scss';

export function ProductHead({ productData, categoriesNames }: IProductHeaderProps): React.ReactNode {
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
      <AddToBasketBtn productId={productData.id} className={styles.addToBasketBtn} />
    </Box>
  );
}
