import { Box } from '@mui/material';
import { Title } from '@/components/Title/Title';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { arrayCategories } from '@/pages/CatalogPage/mock';

import styles from './CatalogPage.module.scss';

export function CatalogPage(): React.ReactNode {
  return (
    <Box className={styles.catalogContainer}>
      <Breadcrumb category={arrayCategories[10]} />
      <Title className={styles.catalog}>Catalog Page</Title>;
    </Box>
  );
}
