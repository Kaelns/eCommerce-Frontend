import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TollIcon from '@mui/icons-material/Toll';
import { AppBar, Badge, Box, IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { LinkRouter } from '@/components/ui/LinkRouter/LinkRouter';
import { Navbar } from '@/layout/Navbar/Navbar';
import { ROUTES } from '@/data/enum/routes.enum';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

import * as styles from './Header.mui';

export function Header(): JSX.Element {
  return (
    <>
      <AppBar position="static" color="default" elevation={2} sx={styles.header}>
        <SectionContainer sx={styles.headerContainer}>
          <TollIcon color="primary" fontSize="large" />
          <Navbar />
          <Box>
            <LinkRouter to={ROUTES.BASKET}>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </LinkRouter>
            <LinkRouter to={ROUTES.USER}>
              <IconButton>
                <AccountCircleOutlinedIcon />
              </IconButton>
            </LinkRouter>
          </Box>
        </SectionContainer>
      </AppBar>
      <Outlet />
    </>
  );
}
