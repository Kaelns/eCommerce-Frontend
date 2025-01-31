// import { useSideDrawer } from '@/layout/SideDrawer/useSideDrawer';
// import { CatalogHeader } from '@/pages/CatalogPage/components/CatalogHeader';
// import { Breadcrumb } from '@/pages/CatalogPage/components/Breadcrumb/Breadcrumb';
import type { SxStyles } from '@/shared/types/types';

// import { Grid, Stack, useMediaQuery, useTheme } from '@mui/system';
import { Box } from '@mui/material';

// import { BtnContained } from '@/components/buttons/BtnContained';
// import { FilterForm } from '@/features/components/FilterForm/FilterForm';
// import { SideDrawer } from '@/layout/SideDrawer/SideDrawer';
// import { Products } from '@/pages/CatalogPage/components/Products';
import { TitleTypography } from '@/components/typography/TitleTypography';

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

export function CatalogPage(): React.ReactNode {
  // const theme = useTheme();
  // const isMatchesLaptopBig = useMediaQuery(theme.breakpoints.up('laptopBig'));
  // const sideDriverHook = useSideDrawer();

  return (
    <Box sx={sxStyles.container}>
      <TitleTypography>Catalog</TitleTypography>
      {/* <Breadcrumb />
      <Stack gap={2} mt={1}>
        <CatalogHeader openDrawer={sideDriverHook.openDrawer} />

        <Grid container spacing={2} columns={10}>
          {isMatchesLaptopBig && (
            <Grid size={{ tablet: 2 }}>
              <FilterForm sx={sxStyles.filterForm} />
            </Grid>
          )}
          <Grid container size={{ tablet: 'grow' }} alignContent="flex-start">
            <Products />
          </Grid>
        </Grid>

        <SideDrawer data={sideDriverHook}>
          <Stack gap={2} sx={sxStyles.drawerContainer}>
            <FilterForm sx={sxStyles.filterForm} />
            <BtnContained onClick={sideDriverHook.closeDrawer}>Close</BtnContained>
          </Stack>
        </SideDrawer>
      </Stack> */}
    </Box>
  );
}
