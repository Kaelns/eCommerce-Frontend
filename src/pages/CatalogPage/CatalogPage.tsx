import { Box } from '@mui/material';
import { Search } from '@/components/Search/Search';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { arrayCategories } from '@/pages/CatalogPage/mock';

import styles from './CatalogPage.module.scss';

export function CatalogPage(): React.ReactNode {
  return (
    <Box className={styles.pageContainer}>
      <Breadcrumb category={arrayCategories[10]} />
      <Box className={styles.productsContainer}>
        <Search />
        <Box className={styles.catalogContainer}>
          {/* <FilterForm className={styles.filterForm} /> */}
          {/* <Products className={styles.products} /> */}
        </Box>
        {/* <PageSelector /> */}
      </Box>
    </Box>
  );
}
