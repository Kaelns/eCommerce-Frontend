import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IProductCardProps } from '@/pages/CatalogPage/components/ProductCard/ProductCard.interface';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { useProduct } from '@/hooks/useProduct/useProduct';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { CardPrice } from '@/components/CardPrice/CardPrice';

import styles from './ProductCard.module.scss';
import { Discount } from '@/components/Discount/Discount';

export function ProductCard({ product }: IProductCardProps): React.ReactNode {
  const data = useProduct(product);
  const navigate = useNavigate();

  const shortedDescription = data.description.slice(0, data.description.indexOf(' ', 90));

  // TODO is Available product

  const handleClick = (): void => {
    // TODO check if product and then redirect
    navigate(`${ROUTES.DETAILED_PRODUCT}/${data.key}`);
  };

  return (
    <Box className={styles.cardContainer} onClick={handleClick}>
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
  );
}
