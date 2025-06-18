import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import TollIcon from '@mui/icons-material/Toll';
import { Box, AppBar, useTheme, useMediaQuery } from '@mui/material';

import { Burger } from '@/widgets/AppHeader/ui/Burger';
import { headerPaths } from '@/widgets/AppHeader/model/navbars';
import { UserPopoverMenu } from '@/widgets/AppHeader/ui/UserPopoverMenu';

import { CartLinkIconBtn } from '@/entities/cart';

import { Navbar } from '@/features/Navbar';

import { SectionContainer } from '@/shared/ui/components';

const sxStyles: SxStylesMap = {
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
          {!isMatchesMedia && <Navbar navPaths={headerPaths} />}
        </Stack>

        <Box>
          <CartLinkIconBtn />
          <UserPopoverMenu />
          {isMatchesMedia && <Burger />}
        </Box>
      </SectionContainer>
    </AppBar>
  );
}
