import { Pagination, PaginationProps } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useMediaQuery, useTheme } from '@mui/system';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { SxPropsNotArr } from '@/shared/types';
import { convertSxToArr } from '@/utils/convertSxToArr';
import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';
import { convertToMaxPages } from '@/utils/convertToMaxPages';

const sxPagination: SxPropsNotArr = {
  display: 'flex',
  justifyContent: 'center',
  p: 1.5,
  mt: 1
};

interface IProductPagination extends PaginationProps {
  amount: number;
}

export function ProductPagination({
  amount,
  sx = {},
  showLastButton = true,
  showFirstButton = true,
  ...props
}: IProductPagination): React.ReactNode {
  const theme = useTheme();
  const isMatchTablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const adaptiveSize = isMatchTablet ? 'medium' : 'large';
  const pages = useMemo(() => convertToMaxPages(amount, LIMIT_ON_PAGE), [amount]);
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
      size={adaptiveSize}
      color="primary"
      sx={[sxPagination, ...convertSxToArr(sx)]}
      {...props}
    />
  );
}
