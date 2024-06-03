import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Search } from '@/components/Search/Search';
import { theme } from '@/features/ThemeProvider/theme/theme';
import { ICatalogHeaderProps } from '@/pages/CatalogPage/components/CatalogHeader/CatalogHeader.interface';

import styles from './CatalogHeader.module.scss';

export function CatalogHeader({ openDrawer }: ICatalogHeaderProps): React.ReactNode {
  const [isSearchInFocus, setIsSearchInFocus] = useState(false);
  const isMatchesMedia = useMediaQuery(theme.breakpoints.up('lg'));

  return (
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
  );
}
