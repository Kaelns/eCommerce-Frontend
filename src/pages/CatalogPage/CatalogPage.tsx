import { Box } from '@mui/material';
import { useReducer } from 'react';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { useSideDrawer } from '@/components/SideDrawer/useSideDrawer';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { CatalogHeader } from '@/pages/CatalogPage/components/CatalogHeader/CatalogHeader';
import { CatalogMain } from '@/pages/CatalogPage/components/CatalogMain/CatalogMain';
import { filterReducer } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer';
import { INITIAL_VALUE } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';

import styles from './CatalogPage.module.scss';

export function CatalogPage(): React.ReactNode {
  const filterReducerHook = useReducer(filterReducer, INITIAL_VALUE);

  const sideDriverHook = useSideDrawer();

  return (
    <Box className={styles.pageContainer}>
      <Breadcrumb
        categoryTree={eCommerceAPI.categoriesTree}
        className={styles.breadcrumbBtn}
        filterReducerHook={filterReducerHook}
      />
      <Box className={styles.bodyContainer}>
        <CatalogHeader openDrawer={sideDriverHook.openDrawer} />
        <CatalogMain filterReducerHook={filterReducerHook} sideDriverHook={sideDriverHook} />
      </Box>
    </Box>
  );
}
