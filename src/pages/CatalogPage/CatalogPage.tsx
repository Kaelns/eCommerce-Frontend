import { Box } from '@mui/material';
import { useSideDrawer } from '@/components/SideDrawer/useSideDrawer';
import { CatalogHeader } from '@/pages/CatalogPage/components/CatalogHeader/CatalogHeader';
import { CatalogMain } from '@/pages/CatalogPage/components/CatalogMain/CatalogMain';
import { Breadcrumb } from '@/pages/CatalogPage/components/Breadcrumb/Breadcrumb';

import styles from './CatalogPage.module.scss';

export function CatalogPage(): React.ReactNode {
  const sideDriverHook = useSideDrawer();

  return (
    <Box className={styles.pageContainer}>
      <Breadcrumb className={styles.breadcrumbBtn} />
      <Box className={styles.bodyContainer}>
        <CatalogHeader openDrawer={sideDriverHook.openDrawer} />
        <CatalogMain sideDriverHook={sideDriverHook} />
      </Box>
    </Box>
  );
}
