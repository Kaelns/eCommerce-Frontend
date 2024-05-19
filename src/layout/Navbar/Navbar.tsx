import { Box, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/data/enum/routes.enum';

const navRoutes = {
  [ROUTES.MAIN]: 'Main',
  [ROUTES.CATALOG]: 'Catalog',
  [ROUTES.ABOUT_US]: 'About Us',
  [ROUTES.LOGIN]: 'Login',
  [ROUTES.REGISTRATION]: 'Register'
};

const navRoutesKeys = Object.keys(navRoutes);

export function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState<number | false>(
    pathname in navRoutes ? navRoutesKeys.indexOf(pathname) : false
  );

  useEffect(() => {
    if (!(pathname in navRoutes)) {
      setActiveLink(false);
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setActiveLink(newValue);
  };

  return (
    <Box component="nav">
      <Tabs value={activeLink} onChange={handleChange}>
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
