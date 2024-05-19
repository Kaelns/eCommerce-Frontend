import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Badge, Box, IconButton } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '@/layout/Navbar/Navbar';
import { ROUTES } from '@/data/enum/routes.enum';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import * as styles from './Header.mui';
import { UserPopover } from '@/components/UserPopover/UserPopover';

export function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="default" elevation={2} sx={styles.header}>
        <SectionContainer sx={styles.headerContainer}>
          <TollIcon color="primary" fontSize="large" />
          <Navbar />
          <Box>
            <IconButton onClick={() => navigate(ROUTES.BASKET)}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <UserPopover />
          </Box>
        </SectionContainer>
      </AppBar>
      <Outlet />
    </>
  );
}
