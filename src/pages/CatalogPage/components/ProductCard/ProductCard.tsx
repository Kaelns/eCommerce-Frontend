import { Box, Typography } from '@mui/material';
import { IProductCardProps } from '@/pages/CatalogPage/components/ProductCard/ProductCard.interface';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { Discount } from '@/components/typography/Discount/Discount';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { useProduct } from '@/hooks/useProduct/useProduct';
import { LinkRouter } from '@/components/LinkRouter/LinkRouter';
import { AddToBasketBtn } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';

import styles from './ProductCard.module.scss';

export function ProductCard({ product, cartData }: IProductCardProps): React.ReactNode {
  const data = useProduct(product);

  const shortedDescription = data.description.slice(0, data.description.indexOf(' ', 90));
  // Todo: is Available product

  return (
    <LinkRouter to={`${ROUTES.DETAILED_PRODUCT}/${data.key}`}>
      <Box className={styles.cardContainer}>
        <AddToBasketBtn
          isIconBtn
          productId={data.id}
          availability={!data.maxQuantity}
          lineItemId={findBasketProductId(cartData.basket, data.id)}
          className={styles.basketBtn}
          basketIconStyles={styles.basketIcon}
          progressIconStyles={styles.basketProgress}
        />
        <Discount discount={data.discount} className={styles.discount} />
        <ImageLoad height={200} src={data.imageUrl} alt={data.name} imgStyles={styles.img} />
        <Box>
          <TextBold variant="subtitle1" className={styles.title}>
            {data.name}
          </TextBold>
          <Typography variant="subtitle2">
            <b>Available quantity: </b>
            {data.maxQuantity}
          </Typography>
          <CardPrice price={data.price} discount={data.discount} discountedPrice={data.discountedPrice} />
          <Typography className={styles.description}>{shortedDescription}...</Typography>
        </Box>
      </Box>
    </LinkRouter>
  );
}
