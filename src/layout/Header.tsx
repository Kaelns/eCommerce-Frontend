import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useState } from 'react';
import { Stack } from '@mui/system';
import { Navbar } from '@/layout/Navbar/Navbar';
import { BasketLink } from '@/components/buttons/BasketLink';
import { UserPopover } from '@/components/UserPopover';
import { SectionContainer } from '@/layout/SectionContainer';
import { Burger } from '@/components/buttons/Burger';
import { SxStyles } from '@/shared/types';
import { Navbars } from '@/layout/Navbar/Navbar.constants';

const sxStyles: SxStyles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 1.6
  },
  burgerMenu: {
    p: 3
  }
};

export function Header(): React.ReactNode {
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
    <AppBar position="static" color="default" elevation={2}>
      <SectionContainer sx={sxStyles.headerContainer}>
        <Stack direction="row" gap={4}>
          <TollIcon color="primary" fontSize="large" />
          {!isMatchesMedia && <Navbar navbarType={Navbars.HEADER} />}
        </Stack>
        <Box>
          <BasketLink />
          <UserPopover />
          {isMatchesMedia && <Burger onClick={openDrawer} />}
          <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
            <Box sx={sxStyles.burgerMenu}>
              <Navbar customOrientation="vertical" navbarType={Navbars.HEADER_BURGER} onLinkClick={closeDrawer} />
            </Box>
          </Drawer>
        </Box>
      </SectionContainer>
    </AppBar>
  );
}
