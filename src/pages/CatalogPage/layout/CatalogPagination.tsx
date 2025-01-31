import type { PaginationProps } from '@mui/material';
import type { SxPropsNotArr } from '@/shared/types/types';

import { Pagination } from '@mui/material';
import { useMemo, useContext } from 'react';
import { useTheme, useMediaQuery } from '@mui/system';

import { LIMIT_ON_PAGE } from '@/services/constants';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { calculateMaxPages } from '@/utils/numbers/calculateMaxPages';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

const sxPagination: SxPropsNotArr = {
  display: 'flex',
  justifyContent: 'center',
  p: 1.5,
  mt: 1
};

interface IProductPagination extends PaginationProps {
  amount: number;
}

export function CatalogPagination({ amount, sx = {}, showLastButton = true, showFirstButton = true, ...props }: IProductPagination): React.ReactNode {
  const theme = useTheme();
  const isMatchTablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const adaptiveSize = isMatchTablet ? 'medium' : 'large';
  const pages = useMemo(() => calculateMaxPages(amount, LIMIT_ON_PAGE), [amount]);
  const isDisabled = !(pages - 1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number): void => {
    dispatchFilterState({ type: FilterStateEnum.PAGE, payload: value });
    window.scrollTo({ top: 0 });
  };

  return (
    <Pagination
      count={pages}
      page={filterState.page}
      disabled={isDisabled}
      onChange={handlePageChange}
      size={adaptiveSize}
      color="primary"
      sx={[sxPagination, ...convertSxToArr(sx)]}
      {...props}
    />
  );
}
