import { Select, MenuItem, SelectChangeEvent, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState, Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

import styles from './SortBy.module.scss';

export function SortBy(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);
  const sortKeys = Object.keys(Sort);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatchFilterState({ type: FilterState.SORT, payload: event.target.value });
  };

  return (
    <Box className={styles.componentContainer}>
      <Typography className={styles.title}>Sort: </Typography>
      <Select value={filterState.sort} onChange={handleChange} className={styles.sortContainer}>
        {sortKeys.map((key) => {
          const sortValue = Sort[key as keyof typeof Sort];
          return (
            <MenuItem key={key} value={sortValue} className={styles.menuItem}>
              {sortValue}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}
