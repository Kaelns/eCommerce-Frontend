import { Box, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavbar } from '@/layout/Navbar/useNavbar';
import { Navbars } from '@/layout/Navbar/Navbar.enum';

interface IProps {
  navbarType: Navbars;
}

export function Navbar({ navbarType }: IProps): JSX.Element {
  const navigate = useNavigate();
  const { navRoutes, orientation, styles } = useNavbar(navbarType);
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState<number | false>(false);

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
        orientation={orientation}
        TabIndicatorProps={{
          sx: {
            left: 0
          }
        }}
      >
        {navRoutesKeys.map((route) => (
          <Tab
            key={route}
            sx={{ textTransform: 'none', ...styles }}
            label={navRoutes[route as keyof typeof navRoutes]}
            onClick={() => navigate(route)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
