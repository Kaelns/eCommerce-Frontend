import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { BasketLink } from '@/components/ui/BasketLink';
import { UserPopover } from '@/components/UserPopover/UserPopover';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import styles from './Header.module.scss';
import { Burger } from '@/components/ui/Burger';

export function Header(): JSX.Element {
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up('sm'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => (): void => {
    setOpen(newOpen);
  };

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
            {!isMatches && <Burger onClick={toggleDrawer(true)} />}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box className={styles.burgerMenu}>
                <Navbar customOrientation="vertical" navbarType={Navbars.HEADER} />
              </Box>
            </Drawer>
          </Box>
        </SectionContainer>
      </AppBar>
      <Outlet />
    </>
  );
}
