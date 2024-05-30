import { useEffect, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { styleLeftOnVerticalTabs } from '@/layout/Navbar/data/Navbar.constants';
import { INavbarProps } from '@/layout/Navbar/data/Navbar.interface';
import { useNavbar } from '@/layout/Navbar/hooks/useNavbar';

import styles from './Navbar.module.scss';

export function Navbar({ navbarType, customOrientation, onLinkClick }: INavbarProps): React.ReactNode {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { navRoutes, orientation } = useNavbar(navbarType);
  const [activeLink, setActiveLink] = useState<number | false>(false);

  const navRoutesKeys = Object.keys(navRoutes);
  const resultOrientation = customOrientation ?? orientation;
  const additionalStyles = resultOrientation === 'vertical' ? styles.verticalButton : '';

  function navigateTo(route: string) {
    return (): void => {
      if (onLinkClick) {
        onLinkClick();
      }
      navigate(route);
    };
  }

  useEffect(() => {
    if (pathname in navRoutes) {
      setActiveLink(navRoutesKeys.indexOf(pathname));
    } else {
      setActiveLink(false);
    }
  }, [navRoutes, navRoutesKeys, pathname]);

  return (
    <Box component="nav">
      <Tabs value={activeLink} orientation={resultOrientation} TabIndicatorProps={styleLeftOnVerticalTabs}>
        {navRoutesKeys.map((route) => (
          <Tab
            key={route}
            className={`${styles.buttons} ${additionalStyles}`}
            label={navRoutes[route as keyof typeof navRoutes]}
            onClick={navigateTo(route)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
