import type { SxStylesMap } from '@/shared/model/types';

import { Box, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Stack, useTheme, useMediaQuery } from '@mui/system';

import { CatalogProducts } from '@/pages/CatalogPage/ui/layout/CatalogProducts';
import { CatalogSideDrawer } from '@/pages/CatalogPage/ui/layout/CatalogSideDrawer';
import { setIsOpenFilterDrawerAction } from '@/pages/CatalogPage/model/catalogPage.slice';
import { OpenCatalogSideDrawerBtn } from '@/pages/CatalogPage/ui/components/OpenCatalogSideDrawerBtn';

import { CatalogSearch, CatalogFilterForm, CategoriesBreadcrumb } from '@/features/catalog-filters';

import { ContainedIconBtn } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

const sxStyles: SxStylesMap = {
  container: {
    mt: -2
  },
  filterForm: {
    maxWidth: 400
  },
  drawerContainer: {
    overflowY: 'scroll',
    p: 3,
    pb: 0
  },
  drawerCloseBtn: {
    position: 'fixed',
    top: '1rem',
    right: '2rem',
    zIndex: 1000
  }
};

export function CatalogPage() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isMatchesLaptopBig = useMediaQuery(theme.breakpoints.up('laptopBig'));

  const handleCloseSideDrawer = () => {
    dispatch(setIsOpenFilterDrawerAction(false));
  };

  return (
    <Box sx={sxStyles.container}>
      <CategoriesBreadcrumb />
      <Stack component="section" gap={2} mt={1}>
        <Stack direction="row" gap={1}>
          <CatalogSearch />
          <OpenCatalogSideDrawerBtn />
        </Stack>

        <Stack direction="row" gap={2}>
          {isMatchesLaptopBig && <CatalogFilterForm component="aside" flex={2} sx={sxStyles.filterForm} />}
          <CatalogProducts flex={8} />
        </Stack>

        <CatalogSideDrawer>
          <Tooltip title="Close side menu">
            <ContainedIconBtn onClick={handleCloseSideDrawer} sx={sxStyles.drawerCloseBtn}>
              <ClearIcon />
            </ContainedIconBtn>
          </Tooltip>

          <Stack gap={2} sx={sxStyles.drawerContainer}>
            <CatalogFilterForm component="aside" sx={sxStyles.filterForm} />
          </Stack>
        </CatalogSideDrawer>
      </Stack>
    </Box>
  );
}
