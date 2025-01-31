import type { SxStyles } from '@/shared/types/types';

import { Drawer } from '@mui/material';
import { useState, useCallback } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/system';

import { Navbar, Navbars } from '@/layout/Navbar';

import { BurgerBtn } from '@/components/buttons/BurgerBtn';

const sxStyles: SxStyles = {
  burgerMenu: {
    p: 3
  }
};

export function Burger() {
  const theme = useTheme();
  const isMatchesMedia = useMediaQuery(theme.breakpoints.down('tablet'));

  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = (): void => {
    setIsOpen(true);
  };

  const closeDrawer = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {isMatchesMedia && <BurgerBtn onClick={openDrawer} />}
      <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
        <Box sx={sxStyles.burgerMenu}>
          <Navbar customOrientation="vertical" navbarType={Navbars.HEADER_BURGER} onLinkClick={closeDrawer} />
        </Box>
      </Drawer>
    </>
  );
}
