import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { BasketLink } from '@/components/ui/BasketLink';
import { UserPopover } from '@/components/UserPopover/UserPopover';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import styles from './Header.module.scss';

export function Header(): JSX.Element {
  return (
    <>
      <AppBar position="static" color="default" elevation={2}>
        <SectionContainer className={styles.headerContainer}>
          <Box className={styles.columnContainer}>
            <TollIcon color="primary" fontSize="large" />
            <Navbar navbarType={Navbars.HEADER} />
          </Box>
          <Box>
            <BasketLink />
            <UserPopover />
          </Box>
        </SectionContainer>
      </AppBar>
      <Outlet />
    </>
  );
}
