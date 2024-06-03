import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { BasketLink } from '@/components/buttons/BasketLink/BasketLink';
import { UserPopover } from '@/components/UserPopover/UserPopover';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import styles from './Header.module.scss';
import { Burger } from '@/components/buttons/Burger/Burger';

export function Header(): React.ReactNode {
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up('sm'));
  const [isOpen, setIsOpen] = useState(false);

  // TODO change drawer
  const openDrawer = (): void => {
    setIsOpen(true);
  };

  const closeDrawer = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <AppBar position="static" color="default" elevation={2}>
        <SectionContainer className={styles.headerContainer}>
          <Box className={styles.columnContainer}>
            <TollIcon color="primary" fontSize="large" />
            {isMatches && <Navbar navbarType={Navbars.HEADER} />}
          </Box>
          <Box>
            <BasketLink />
            <UserPopover />
            {!isMatches && <Burger onClick={openDrawer} />}
            <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
              <Box className={styles.burgerMenu}>
                <Navbar customOrientation="vertical" navbarType={Navbars.HEADER_BURGER} onLinkClick={closeDrawer} />
              </Box>
            </Drawer>
          </Box>
        </SectionContainer>
      </AppBar>
      <Outlet />
    </>
  );
}
