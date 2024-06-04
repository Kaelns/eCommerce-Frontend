import { Select, MenuItem, SelectChangeEvent, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ISortByProps } from '@/pages/CatalogPage/components/SortBy/SortBy.interface';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState, Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

import styles from './SortBy.module.scss';

export function SortBy(props: ISortByProps): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);
  const sortKeys = Object.keys(Sort);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatchFilterState({ type: FilterState.SORT, payload: event.target.value });
  };

  return (
    <Box className={styles.componentContainer}>
      <Typography className={styles.title}>Sort: </Typography>
      <Select value={filterState.sort} onChange={handleChange} variant="standard" className={styles.sortContainer}>
        {sortKeys.map((key) => {
          const sortValue = Sort[key as keyof typeof Sort];
          return (
            <MenuItem key={key} value={sortValue}>
              {sortValue}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}
