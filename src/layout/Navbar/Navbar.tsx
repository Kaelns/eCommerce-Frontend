import { Box, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authorizedRoutes, navbarRoutes, nonAuthorizedRoutes } from '@/layout/Navbar/Navbar.routes';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

interface IProps {
  isUserPopover?: boolean;
}

export function Navbar({ isUserPopover = false }: IProps): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { authUserToken } = useAuthContext();
  const [activeLink, setActiveLink] = useState<number | false>(false);

  const userPopoverRoutes = (): typeof authorizedRoutes | typeof nonAuthorizedRoutes =>
    authUserToken ? authorizedRoutes : nonAuthorizedRoutes;

  const navRoutes = isUserPopover ? userPopoverRoutes() : navbarRoutes;
  const navRoutesKeys = Object.keys(navRoutes);

  useEffect(() => {
    if (!(pathname in navRoutes)) {
      setActiveLink(false);
    }
    if (pathname in navRoutes) {
      setActiveLink(navRoutesKeys.indexOf(pathname));
    }
  }, [navRoutes, navRoutesKeys, pathname]);

  return (
    <Box component="nav">
      <Tabs
        value={activeLink}
        orientation={isUserPopover ? 'vertical' : 'horizontal'}
        TabIndicatorProps={{
          sx: {
            left: 0
          }
        }}
      >
        {navRoutesKeys.map((route) => (
          <Tab
            key={route}
            sx={{ textTransform: 'none' }}
            label={navRoutes[route as keyof typeof navRoutes]}
            onClick={() => navigate(route)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
