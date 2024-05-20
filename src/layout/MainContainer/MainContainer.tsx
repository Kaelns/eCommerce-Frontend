import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import styles from './MainContainer.module.scss';

export function MainContainer(): JSX.Element {
  return (
    <Box component="main" className={styles.container}>
      <SectionContainer className={styles.sectionContainer}>
        <Outlet />
      </SectionContainer>
    </Box>
  );
}
