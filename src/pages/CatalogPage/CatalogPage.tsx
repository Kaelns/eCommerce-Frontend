import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { Search } from '@/components/Search/Search';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { arrayCategories } from '@/pages/CatalogPage/mock';
import { FilterForm } from '@/features/FilterForm/FilterForm';
import { Products } from '@/pages/CatalogPage/components/Products/Products';

import styles from './CatalogPage.module.scss';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';

export function CatalogPage(): React.ReactNode {
  const [categoryKey, setCategoryKey] = useState('');

  const categoryTree = useMemo(() => buildCategoryTree(arrayCategories), []);

  return (
    <Box className={styles.pageContainer}>
      <Breadcrumb categoryKey={categoryKey} setCategoryKey={setCategoryKey} categoryTree={categoryTree} />
      <Box className={styles.productsContainer}>
        <Search />
        <Box className={styles.catalogContainer}>
          <FilterForm
            className={styles.filterForm}
            categoryTree={categoryTree}
            categoryKey={categoryKey}
            setCategoryKey={setCategoryKey}
          />
          <Products className={styles.products} />
        </Box>
        {/* <PageSelector /> */}
      </Box>
    </Box>
  );
}
