import { Box, Typography } from '@mui/material';
import { IProductCardProps } from '@/pages/CatalogPage/components/ProductCard/ProductCard.interface';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { useProduct } from '@/hooks/useProduct/useProduct';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { Discount } from '@/components/Discount/Discount';
import { LinkRouter } from '@/components/LinkRouter/LinkRouter';

import styles from './ProductCard.module.scss';

export function ProductCard({ product }: IProductCardProps): React.ReactNode {
  const data = useProduct(product);

  const shortedDescription = data.description.slice(0, data.description.indexOf(' ', 90));

  // TODO is Available product

  return (
    <LinkRouter to={`${ROUTES.DETAILED_PRODUCT}/${data.key}`}>
      <Box className={styles.cardContainer}>
        <Discount discount={data.discount} className={styles.discount} />
        <Box className={styles.imgContainer}>
          <ImageLoad src={data.imageUrl} alt={data.name} className={styles.img} />
        </Box>
        <Box>
          <TextBold variant="subtitle1" className={styles.title}>
            {data.name}
          </TextBold>
          <CardPrice price={data.price} discount={data.discount} discounted={data.discounted} />
          <Typography className={styles.description}>{shortedDescription}...</Typography>
        </Box>
      </Box>
    </LinkRouter>
  );
}
