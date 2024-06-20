import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Title } from '@/components/typography/Title/Title';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';
import { ROUTES } from '@/features/Router/data/Router.enum';

import furnitureImg from '@/assets/furniture.webp';
import styles from './MainSection.module.scss';

export function MainSection(): React.ReactNode {
  const navigate = useNavigate();
  const navigateCatalog = (): void => navigate(ROUTES.CATALOG);
  return (
    <Box component="section" className={styles.mainSection}>
      <Box className={styles.mainImageBackdrop} />
      <Box component="img" src={furnitureImg} alt="furniture" className={styles.mainImage} />
      <Box className={styles.mainColumn1}>
        <Title className={styles.mainTitle} variant="h1" color="white">
          Radiocommerce
        </Title>
        <Title className={styles.mainSubtitle} variant="h2" color="white">
          All sort of high-quality furniture available here
        </Title>
        <Typography className={styles.mainText} variant="body2" color="white">
          Take a look around and choose what you like.Trust me, you won&apos;t regret it. Besides, we have a lot of
          discounts!
        </Typography>
        <BtnCasual className={styles.mainBtn} variant="contained" color="primary" onClick={navigateCatalog}>
          Go to catalog
        </BtnCasual>
      </Box>
    </Box>
  );
}
