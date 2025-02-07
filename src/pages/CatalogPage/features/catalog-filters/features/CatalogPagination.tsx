import type { PaginationProps } from '@mui/material';
import type { SxPropsNotArr } from '@/shared/types/types';

import { useMemo } from 'react';
import { Pagination } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/system';

import { LIMIT_ON_PAGE } from '@/services/ecommerce-api';

import { selectPage, setPageAction } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { calculateMaxPages } from '@/utils/numbers/calculateMaxPages';

import { useAppDispatch, useAppSelector } from '@/shared/redux/redux';

const sxPagination: SxPropsNotArr = {
  display: 'flex',
  justifyContent: 'center',
  p: 1.5,
  mt: 1
};

interface ProductPagination extends PaginationProps {
  amount: number;
}

export function CatalogPagination({ amount, sx = {}, ...props }: ProductPagination) {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const page = useAppSelector(selectPage);
  const maxPages = useMemo(() => calculateMaxPages(amount, LIMIT_ON_PAGE), [amount]);
  const isDisabled = !(maxPages - 1);
  const isMatchTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number): void => {
    dispatch(setPageAction(value));
    window.scrollTo({ top: 0 });
  };

  return (
    <Pagination
      page={page}
      count={maxPages}
      disabled={isDisabled}
      onChange={handlePageChange}
      size={isMatchTablet ? 'medium' : 'large'}
      color="primary"
      sx={[sxPagination, ...convertSxToArr(sx)]}
      {...props}
    />
  );
}
