import { Box, Grid, useMediaQuery } from '@mui/material';
import { FilterForm } from '@/features/FilterForm/FilterForm';
import { Products } from '@/pages/CatalogPage/components/Products/Products';
import { ICatalogMainProps } from '@/pages/CatalogPage/components/CatalogMain/CatalogMain.interface';
import { theme } from '@/features/ThemeProvider/theme/theme';
import { SideDrawer } from '@/components/SideDrawer/SideDrawer';
import ButtonCustom from '@/components/buttons/ButtonCustom/ButtonCustom';

import styles from './CatalogMain.module.scss';

export function CatalogMain({ sideDriverHook }: ICatalogMainProps): React.ReactNode {
  const isMatchesMedia = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Grid container spacing={2} columns={10}>
        {isMatchesMedia && (
          <Grid item lg={2}>
            <FilterForm className={styles.filterForm} />
          </Grid>
        )}
        <Grid item container lg={9.6} alignContent="flex-start">
          <Products className={styles.products} />
        </Grid>
      </Grid>
      <SideDrawer data={sideDriverHook}>
        <Box className={styles.drawerContainer}>
          <FilterForm className={styles.filterForm} />
          <ButtonCustom onClick={sideDriverHook.closeDrawer}>Close</ButtonCustom>
        </Box>
      </SideDrawer>
    </>
  );
}
