import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { Discount } from '@/components/typography/Discount/Discount';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { Quantity } from '@/pages/BasketPage/components/Quantity/Quantity';
import { IProductBasketProps } from '@/pages/BasketPage/components/ProductBasket/ProductBasket.interface';
import { FRACTION_DIGITS } from '@/services/ECommerceInitApi.constants';
import { BasketState } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';

import styles from './ProductBasket.module.scss';

export function ProductBasket({ productData, dispatchBasketProducts }: IProductBasketProps): React.ReactNode {
  const handleDelete = (): void => {
    dispatchBasketProducts({ type: BasketState.DELETE, payload: { id: productData.id } });
  };

  return (
    <Box className={styles.cardContainer}>
      <Button variant="contained" onClick={handleDelete} className={styles.deleteProduct}>
        <CloseIcon className={styles.deleteIcon} />
      </Button>
      <Discount discount={productData.discount} className={styles.discount} />
      <ImageLoad
        containerStyles={styles.column1}
        height={250}
        src={productData.imageUrl}
        alt={productData.name}
        imgStyles={styles.img}
      />
      <Box className={styles.column2}>
        <TextBold variant="subtitle1" className={styles.title}>
          {productData.name}
        </TextBold>
        <Box>
          <CardPrice
            price={productData.price}
            discount={productData.discount}
            discountedPrice={productData.discountedPrice}
          />
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {productData.maxQuantity}
          </Typography>
          <Quantity
            id={productData.id}
            quantity={productData.quantity}
            dispatchBasketProducts={dispatchBasketProducts}
            inputStyles={styles.quantityInput}
            containerStyles={styles.quantityContainer}
          />
          <CardPrice
            text="Final: "
            price={+(productData.price * productData.quantity).toFixed(FRACTION_DIGITS)}
            discount={productData.discount}
            discountedPrice={+(productData.discountedPrice * productData.quantity).toFixed(FRACTION_DIGITS)}
          />
        </Box>
      </Box>
    </Box>
  );
}
