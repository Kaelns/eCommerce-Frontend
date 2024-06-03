import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase } from '@mui/material';
import { useContext } from 'react';
import { ISearchProps } from '@/pages/CatalogPage/components/Search/Search.interface';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { InputReactEvent } from '@/data/types/InputReactEvent';

import styles from './Search.module.scss';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

export function Search({ className, setIsSearchInFocus, ...props }: ISearchProps): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const handleOnFocus = (): void => {
    setIsSearchInFocus(true);
  };

  const handleBlur = (): void => {
    setIsSearchInFocus(false);
  };

  const handleInputChange = (e: InputReactEvent): void => {
    dispatchFilterState({ type: FilterState.SEARCH, payload: e.target.value });
  };

  return (
    <Box className={`${className} ${styles.search}`}>
      <Box className={styles.iconWrapper}>
        <SearchIcon fontSize="small" />
      </Box>
      <InputBase
        value={filterState.search}
        onChange={handleInputChange}
        placeholder="Search…"
        onFocus={handleOnFocus}
        onBlur={handleBlur}
        className={styles.input}
        {...props}
      />
    </Box>
  );
}
