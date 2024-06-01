import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, InputBaseProps } from '@mui/material';

import styles from './Search.module.scss';

export function Search(props: InputBaseProps): React.ReactNode {
  return (
    <Box className={styles.search}>
      <Box className={styles.iconWrapper}>
        <SearchIcon fontSize="small" />
      </Box>
      <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} {...props} className={styles.input} />
    </Box>
  );
}
