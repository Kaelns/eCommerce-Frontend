import type { Theme, SxProps } from '@mui/system';
import type { SxStyles } from '@/shared/model/types';

import { useState, useEffect } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { sxMixins } from '@/shared/lib/mui';

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

interface NavbarProps {
  orientation?: 'horizontal' | 'vertical';
  navPaths: Record<string, React.ReactNode>;

  onLinkClick?: () => void;

  sxContainer?: SxProps<Theme>;
}

export function Navbar({ navPaths, orientation = 'horizontal', onLinkClick, sxContainer = {} }: NavbarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState<false | number>(false);

  const navPathsKeys = Object.keys(navPaths);

  function navigateTo(route: string) {
    return (): void => {
      onLinkClick?.();
      navigate(route);
    };
  }

  useEffect(() => {
    setActiveLink(pathname in navPaths ? navPathsKeys.indexOf(pathname) : false);
  }, [navPaths, navPathsKeys, pathname]);

  return (
    <Box component="nav" sx={sxContainer}>
      <Tabs value={activeLink} orientation={orientation} slotProps={{ indicator: { sx: sxStyles.tabsLeftOnVertical } }}>
        {navPathsKeys.map((route) => (
          <Tab
            key={route}
            label={navPaths[route as keyof typeof navPaths]}
            onClick={navigateTo(route)}
            sx={[sxStyles.btns, orientation === 'vertical' && sxStyles.verticalBtn]}
          />
        ))}
      </Tabs>
    </Box>
  );
}
