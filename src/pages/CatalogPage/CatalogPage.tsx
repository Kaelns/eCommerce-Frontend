import type { SxStyles } from '@/shared/types/types';

import { Box } from '@mui/material';
import { Stack, useTheme, useMediaQuery } from '@mui/system';

import { CatalogSearch } from '@/pages/CatalogPage/layout/CatalogSearch';
import { CatalogProducts } from '@/pages/CatalogPage/layout/CatalogProducts';
import { CatalogSideDrawer } from '@/pages/CatalogPage/layout/CatalogSideDrawer';
import { setIsOpenFilterDrawerAction } from '@/pages/CatalogPage/catalogPage.slice';
import { CategoriesBreadcrumb } from '@/pages/CatalogPage/features/CategoriesBreadcrumb';
import { OpenCatalogSideDrawerBtn } from '@/pages/CatalogPage/components/OpenCatalogSideDrawerBtn';

import { ContainedBtn } from '@/components/buttons/ContainedBtn';
import { TitleTypography } from '@/components/typography/TitleTypography';

import { useAppDispatch } from '@/shared/redux/redux';

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

        {/* <CatalogFilterForm sx={sxStyles.filterForm} /> */}

        <Stack direction="row" gap={2}>
          {isMatchesLaptopBig && (
            <TitleTypography flex={2} sx={sxStyles.filterForm}>
              Filter
            </TitleTypography>
          )}
          <CatalogProducts flex={8} />
        </Stack>

        <CatalogSideDrawer>
          <Stack gap={2} sx={sxStyles.drawerContainer}>
            {/* <CatalogFilterForm sx={sxStyles.filterForm} /> */}
            <ContainedBtn onClick={handleCloseSideDrawer}>Close</ContainedBtn>
          </Stack>
        </CatalogSideDrawer>
      </Stack>
    </Box>
  );
}
