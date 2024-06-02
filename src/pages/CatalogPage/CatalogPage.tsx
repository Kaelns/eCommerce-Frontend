import { Box, Button, Drawer, Grid, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonCustom from '@/components/ButtonCustom/ButtonCustom';
import { theme } from '@/features/ThemeProvider/theme/theme';
import { Search } from '@/components/Search/Search';
import { Products } from '@/pages/CatalogPage/components/Products/Products';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { FilterForm } from '@/features/FilterForm/FilterForm';
import { arrayCategories } from '@/pages/CatalogPage/mock';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';

import styles from './CatalogPage.module.scss';

export function CatalogPage(): React.ReactNode {
  const [categoryKey, setCategoryKey] = useState('');
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isSearchInFocus, setIsSearchInFocus] = useState(false);
  const isMatchesMedia = useMediaQuery(theme.breakpoints.up('lg'));

  const categoryTree = useMemo(() => buildCategoryTree(arrayCategories), []);

  const openDrawer = (): void => {
    setIsOpenDrawer(true);
  };

  const closeDrawer = (): void => {
    setIsOpenDrawer(false);
  };

  return (
    <Box className={styles.pageContainer}>
      <Breadcrumb
        categoryKey={categoryKey}
        setCategoryKey={setCategoryKey}
        categoryTree={categoryTree}
        className={styles.breadcrumbBtn}
      />
      <Box className={styles.productsContainer}>
        <Box className={styles.btnContainer}>
          <Search
            className={`${isSearchInFocus ? styles.active : ''} ${styles.btn1}`}
            setIsSearchInFocus={setIsSearchInFocus}
          />
          {!isMatchesMedia && (
            <Button className={styles.btn2} onClick={openDrawer}>
              {isSearchInFocus ? <ExpandMoreIcon /> : 'Filters'}
            </Button>
          )}
        </Box>
        <Grid container spacing={2} columns={10}>
          {isMatchesMedia && (
            <Grid item lg={2.2}>
              <FilterForm
                className={styles.filterForm}
                categoryTree={categoryTree}
                categoryKey={categoryKey}
                setCategoryKey={setCategoryKey}
              />
            </Grid>
          )}
          <Grid item lg={7.8}>
            <Products className={styles.products} />
          </Grid>
        </Grid>
        <Drawer anchor="right" open={isOpenDrawer} onClose={closeDrawer}>
          <Box className={styles.drawerContainer}>
            <FilterForm
              className={styles.filterForm}
              categoryTree={categoryTree}
              categoryKey={categoryKey}
              setCategoryKey={setCategoryKey}
            />
            <ButtonCustom onClick={closeDrawer}>Close</ButtonCustom>
          </Box>
        </Drawer>
      </Box>
      {/* <PageSelector /> */}
    </Box>
  );
}
