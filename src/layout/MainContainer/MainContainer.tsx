import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';
import { AlertText } from '@/components/AlertText/AlertText';

import styles from './MainContainer.module.scss';

export function MainContainer(): React.ReactNode {
  const { isOpen, text, handleClose, severity } = useContext(AlertTextContext);

  return (
    <Box component="main" className={styles.container}>
      <SectionContainer className={styles.sectionContainer}>
        <Outlet />
      </SectionContainer>
      <AlertText isOpen={isOpen} text={text} severity={severity} handleClose={handleClose} />
    </Box>
  );
}
