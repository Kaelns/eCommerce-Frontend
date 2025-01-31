import type { SxStyles } from '@/shared/types/types';
import type { Navbars } from '@/layout/Navbar/constants';

import { useState, useEffect } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { useNavbar } from '@/layout/Navbar/useNavbar';

import { sxMixins } from '@/shared/data/mui-mixins';

const sxStyles: SxStyles = {
  btns: {
    borderRadius: 1,
    textTransform: 'none',
    ...sxMixins.animation(),
    ...sxMixins.mediaHover({
      bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))'
    })
  },

  verticalBtn: {
    alignItems: 'flex-start'
  },

  tabsLeftOnVertical: {
    left: 0
  }
};

interface INavbarProps {
  navbarType: Navbars;
  onLinkClick?: () => void;
  customOrientation?: 'horizontal' | 'vertical';
}

export function Navbar({ navbarType, customOrientation, onLinkClick }: INavbarProps): React.ReactNode {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { navPaths, orientation } = useNavbar(navbarType);
  const [activeLink, setActiveLink] = useState<false | number>(false);

  const navPathsKeys = Object.keys(navPaths);
  const resultOrientation = customOrientation ?? orientation;

  function navigateTo(route: string) {
    return (): void => {
      if (onLinkClick) {
        onLinkClick();
      }
      navigate(route);
    };
  }

  useEffect(() => {
    if (pathname in navPaths) {
      setActiveLink(navPathsKeys.indexOf(pathname));
    } else {
      setActiveLink(false);
    }
  }, [navPaths, navPathsKeys, pathname]);

  return (
    <Box component="nav">
      <Tabs value={activeLink} orientation={resultOrientation} TabIndicatorProps={{ sx: sxStyles.tabsLeftOnVertical }}>
        {navPathsKeys.map((route) => (
          <Tab
            key={route}
            sx={[sxStyles.btns, resultOrientation === 'vertical' && sxStyles.verticalBtn]}
            label={navPaths[route as keyof typeof navPaths]}
            onClick={navigateTo(route)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
