import type { SxStyles } from '@/shared/model/types';

import { Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Stack, useTheme, useMediaQuery } from '@mui/system';

import { CatalogProducts } from '@/pages/CatalogPage/ui/layout/CatalogProducts';
import { CatalogSideDrawer } from '@/pages/CatalogPage/ui/layout/CatalogSideDrawer';
import { setIsOpenFilterDrawerAction } from '@/pages/CatalogPage/model/catalogPage.slice';
import { OpenCatalogSideDrawerBtn } from '@/pages/CatalogPage/ui/components/OpenCatalogSideDrawerBtn';

import { CatalogSearch, CatalogFilterForm, CategoriesBreadcrumb } from '@/features/catalog-filters';

import { ContainedIconBtn } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  container: {
    mt: -2
  },
  filterForm: {
    maxWidth: 400
  },
  drawerContainer: {
    overflowY: 'scroll',
    p: 3
  },
  drawerCloseBtn: {
    position: 'fixed',
    top: '1rem',
    right: '2rem',
    zIndex: 1000
  }
};

export function CatalogPage() {
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isMatchesLaptopBig = useMediaQuery(theme.breakpoints.up('laptopBig'));

  const handleCloseSideDrawer = () => {
    dispatch(setIsOpenFilterDrawerAction(false));
  };

  return (
    <Box sx={sxStyles.container}>
      <CategoriesBreadcrumb />
      <Stack gap={2} mt={1}>
        <Stack direction="row" gap={1}>
          <CatalogSearch />
          <OpenCatalogSideDrawerBtn />
        </Stack>

        <Stack direction="row" gap={2}>
          {isMatchesLaptopBig && <CatalogFilterForm flex={2} sx={sxStyles.filterForm} />}
          <CatalogProducts flex={8} />
        </Stack>

        <CatalogSideDrawer>
          <ContainedIconBtn onClick={handleCloseSideDrawer} sx={sxStyles.drawerCloseBtn}>
            <ClearIcon />
          </ContainedIconBtn>
          <Stack gap={2} sx={sxStyles.drawerContainer}>
            <CatalogFilterForm sx={sxStyles.filterForm} />
          </Stack>
        </CatalogSideDrawer>
      </Stack>
    </Box>
  );
}
