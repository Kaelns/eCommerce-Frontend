import { Pagination } from '@mui/material';
import { useContext, useMemo } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { convertToMaxPages } from '@/pages/CatalogPage/components/ProductPagination/helpers/convertToMaxPages';

import styles from './ProductPagination.module.scss';

export function ProductPagination({ amount }: { amount: number }): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const pages = useMemo(() => convertToMaxPages(amount), [amount]);
  const isDisabled = !(pages - 1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number): void => {
    dispatchFilterState({ type: FilterState.PAGE, payload: value });
    window.scrollTo({ top: 0 });
  };

  return (
    <Pagination
      count={pages}
      page={filterState.page}
      disabled={isDisabled}
      onChange={handlePageChange}
      className={styles.pagination}
      showFirstButton
      showLastButton
      size="large"
      color="primary"
    />
  );
}
