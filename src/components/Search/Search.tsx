import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase } from '@mui/material';
import { ISearchProps } from '@/components/Search/Search.interface';

import styles from './Search.module.scss';

export function Search({ className, setIsSearchInFocus, ...props }: ISearchProps): React.ReactNode {
  const handleOnFocus = (): void => {
    setIsSearchInFocus(true);
  };

  const handleBlur = (): void => {
    setIsSearchInFocus(false);
  };

  return (
    <Box className={`${className} ${styles.search}`}>
      <Box className={styles.iconWrapper}>
        <SearchIcon fontSize="small" />
      </Box>
      {/* TODO value change */}
      <InputBase
        placeholder="Search…"
        onFocus={handleOnFocus}
        onBlur={handleBlur}
        className={styles.input}
        {...props}
      />
    </Box>
  );
}
