import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IProductCardProps } from '@/pages/CatalogPage/components/ProductCard/ProductCard.interface';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { useProduct } from '@/hooks/useProduct/useProduct';
import { MONEY_SYMBOL } from '@/services/ECommerceInitApi.constants';

import styles from './ProductCard.module.scss';
import { ROUTES } from '@/features/Router/data/Router.enum';

export function ProductCard({ product }: IProductCardProps): React.ReactNode {
  const data = useProduct(product);
  const navigate = useNavigate();

  const shortedDescription = data.description.slice(0, data.description.indexOf(' ', 90));

  // TODO is Available produc typography

  const handleClick = (): void => {
    // TODO check if product and then redirect

    navigate(`${ROUTES.DETAILED_PRODUCT}/${data.key}`);
  };

  return (
    <Box className={styles.cardContainer} onClick={handleClick}>
      {data.discount && (
        <Typography variant="subtitle2" className={styles.discount}>
          {data.discount}%
        </Typography>
      )}
      <Box className={styles.imgContainer}>
        <Box component="img" src={data.imageUrl} alt={data.name} className={styles.img} />
      </Box>
      <Box>
        <TextBold variant="subtitle1" className={styles.title}>
          {data.name}
        </TextBold>
        <Box className={styles.priceContainer}>
          <TextBold variant="subtitle2">Price: </TextBold>
          <Typography variant="subtitle2" className={data.discount ? styles.priceDisabled : styles.price}>
            {data.price} {MONEY_SYMBOL}
          </Typography>
          {data.discount && (
            <Typography variant="subtitle2" className={styles.discounted}>
              {data.discounted} {MONEY_SYMBOL}
            </Typography>
          )}
        </Box>
        <Typography className={styles.description}>{shortedDescription}...</Typography>
      </Box>
    </Box>
  );
}
