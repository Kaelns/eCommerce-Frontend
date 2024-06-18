import { Box } from '@mui/material';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { Discount } from '@/components/typography/Discount/Discount';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { Quantity } from '@/pages/BasketPage/components/Quantity/Quantity';
import { IProductBasketProps } from '@/pages/BasketPage/components/ProductBasket/ProductBasket.interface';

import styles from './ProductBasket.module.scss';
import { FRACTION_DIGITS } from '@/services/ECommerceInitApi.constants';

export function ProductBasket({ productData, dispatchBasketProducts }: IProductBasketProps): React.ReactNode {
  return (
    <Box className={styles.cardContainer}>
      <Discount discount={productData.discount} className={styles.discount} />
      <ImageLoad
        containerStyles={styles.column1}
        height={200}
        src={productData.imageUrl}
        alt={productData.name}
        imgStyles={styles.img}
      />
      <Box className={styles.column2}>
        <Box>
          <TextBold variant="subtitle1" className={styles.title}>
            {productData.name}
          </TextBold>
          <CardPrice
            price={productData.price}
            discount={productData.discount}
            discountedPrice={productData.discountedPrice}
          />
        </Box>
        <Quantity id={productData.id} quantity={productData.quantity} dispatchBasketProducts={dispatchBasketProducts} />
        <CardPrice
          text="Final Price: "
          price={+(productData.price * productData.quantity).toFixed(FRACTION_DIGITS)}
          discount={productData.discount}
          discountedPrice={+(productData.discountedPrice * productData.quantity).toFixed(FRACTION_DIGITS)}
        />
      </Box>
    </Box>
  );
}
