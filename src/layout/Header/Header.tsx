import TollIcon from '@mui/icons-material/Toll';
import type { SxStyles } from '@/shared/types/types';
import { Stack } from '@mui/system';
import { Burger } from '@/layout/Header/components/Burger';
import { Navbar, Navbars } from '@/layout/Navbar';
import { UserPopoverMenu } from '@/layout/Header/components/UserPopoverMenu';
import { SectionContainer } from '@/layout/SectionContainer';
import { CartLinkIconBtn } from '@/layout/Header/components/CartLinkIconBtn';
import { AppBar, Box, useMediaQuery, useTheme } from '@mui/material';

const sxStyles: SxStyles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 1.6
  }
};

export function Header(): React.ReactNode {
  const theme = useTheme();
  const isMatchesMedia = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <AppBar position="static" color="default" elevation={2}>
      <SectionContainer sx={sxStyles.headerContainer}>
        <Stack direction="row" gap={4}>
          <TollIcon color="primary" fontSize="large" />
          {!isMatchesMedia && <Navbar navbarType={Navbars.HEADER} />}
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
