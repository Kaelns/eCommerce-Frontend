import TollIcon from '@mui/icons-material/Toll';
import type { SxStyles } from '@/shared/types/types';
import { Stack } from '@mui/system';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Burger } from '@/layout/Header/components/Burger';
import { Navbars } from '@/layout/Navbar/Navbar.constants';
import { UserPopoverMenu } from '@/layout/Header/components/UserPopoverMenu';
import { SectionContainer } from '@/layout/SectionContainer';
import { BasketLinkIconBtn } from '@/layout/Header/components/BasketLinkIconBtn';
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
          <BasketLinkIconBtn />
          <UserPopoverMenu />
          <Burger />
        </Box>
      </SectionContainer>
    </AppBar>
  );
}
