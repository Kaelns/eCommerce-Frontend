import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Box, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { BasketLink } from '@/components/BasketLink';
import { UserPopover } from '@/components/UserPopover/UserPopover';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import styles from './Header.module.scss';

export function Header(): JSX.Element {
  const { authUserToken, setAuthUserToken } = useAuthContext();
  return (
    <>
      <AppBar position="static" color="default" elevation={2} sx={{ boxShadow: 0.5 }}>
        <SectionContainer className={styles.headerContainer}>
          <Box className={styles.columnContainer}>
            <TollIcon color="primary" fontSize="large" />
            <Navbar navbarType={Navbars.HEADER} />
            {/* TODO delete this. Added for testing */}
            <Button onClick={() => (authUserToken ? setAuthUserToken('') : setAuthUserToken('asdfadsf'))}>
              Toggle login
            </Button>
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
