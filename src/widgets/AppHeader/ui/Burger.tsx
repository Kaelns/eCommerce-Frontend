import type { SxStyles } from '@/shared/model/types';

import { Drawer } from '@mui/material';
import { useState, useCallback } from 'react';

import { headerBurgerPaths } from '@/widgets/AppHeader/model/constants';

import { Navbar } from '@/features/Navbar';

import { BurgerBtn } from '@/shared/ui/elements';

const sxStyles: SxStyles = {
  burgerMenu: {
    p: 3
  }
};

export function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = (): void => {
    setIsOpen(true);
  };

  const closeDrawer = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <BurgerBtn onClick={openDrawer} />

      <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
        <Navbar navPaths={headerBurgerPaths} orientation="vertical" onLinkClick={closeDrawer} sxContainer={sxStyles.burgerMenu} />
      </Drawer>
    </>
  );
}
