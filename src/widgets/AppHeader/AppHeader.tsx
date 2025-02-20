import type { SxStyles } from '@/shared/model/types/types';

import { Stack } from '@mui/system';
import TollIcon from '@mui/icons-material/Toll';
import { Box, AppBar, useTheme, useMediaQuery } from '@mui/material';

import { Burger } from '@/widgets/AppHeader/ui/Burger';
import { UserPopoverMenu } from '@/widgets/AppHeader/ui/UserPopoverMenu';
import { CartLinkIconBtn } from '@/widgets/AppHeader/ui/CartLinkIconBtn';

import { Navbar, Navbars } from '@/features/Navbar';

import { SectionContainer } from '@/shared/ui/components/containers/SectionContainer';

const sxStyles: SxStyles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 1.6
  }
};

export function AppHeader() {
  const theme = useTheme();
  const isMatchesMedia = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <AppBar position="static" color="default" elevation={2}>
      <SectionContainer sx={sxStyles.headerContainer}>
        <Stack direction="row" gap={4}>
          <TollIcon color="primary" fontSize="large" />
          {!isMatchesMedia && <Navbar navbarType={Navbars.APP_HEADER} />}
        </Stack>

        <Box>
          <CartLinkIconBtn />
          <UserPopoverMenu />
          <Burger />
        </Box>
      </SectionContainer>
    </AppBar>
  );
}
