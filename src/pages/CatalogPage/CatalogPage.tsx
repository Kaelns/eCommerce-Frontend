import { Box } from '@mui/material';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { useSideDrawer } from '@/components/SideDrawer/useSideDrawer';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { CatalogHeader } from '@/pages/CatalogPage/components/CatalogHeader/CatalogHeader';
import { CatalogMain } from '@/pages/CatalogPage/components/CatalogMain/CatalogMain';

import styles from './CatalogPage.module.scss';

export function CatalogPage(): React.ReactNode {
  const sideDriverHook = useSideDrawer();

  return (
    <Box className={styles.pageContainer}>
      <Breadcrumb categoryTree={eCommerceAPI.categoriesTree} className={styles.breadcrumbBtn} />
      <Box className={styles.bodyContainer}>
        <CatalogHeader openDrawer={sideDriverHook.openDrawer} />
        <CatalogMain sideDriverHook={sideDriverHook} />
      </Box>
    </Box>
  );
}
