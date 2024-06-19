import { Box } from '@mui/material';
import { MainSection } from '@/pages/MainPage/components/MainSection/MainSection';

import styles from './MainPage.module.scss';

export function MainPage(): React.ReactNode {
  return (
    <Box className={styles.pageContainer}>
      <MainSection />
    </Box>
  );
}
