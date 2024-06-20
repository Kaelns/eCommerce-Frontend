import { Box } from '@mui/material';
import { useContext } from 'react';
import { MainSection } from '@/pages/MainPage/components/MainSection/MainSection';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';

import styles from './MainPage.module.scss';
import { ShowcaseSection } from '@/pages/MainPage/components/ShowcaseSection/ShowcaseSection';

export function MainPage(): React.ReactNode {
  const { categories } = useContext(ECommerceContext);

  return (
    <Box className={styles.pageContainer}>
      <MainSection />
      <ShowcaseSection categoryKey={categories[0]?.key ?? ''} />
      <ShowcaseSection categoryKey={categories[1]?.key ?? ''} />
    </Box>
  );
}
