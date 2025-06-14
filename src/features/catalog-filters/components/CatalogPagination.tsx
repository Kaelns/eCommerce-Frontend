import type { PaginationProps } from '@mui/material';
import type { SxStylesNotArr } from '@/shared/model/types';

import { useMemo } from 'react';
import { Pagination } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/system';

import { ProductConsts, calculateMaxPages } from '@/entities/product';

import { selectPage, setPageAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { concatSx } from '@/shared/lib/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxPagination: SxStylesNotArr = {
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

  const maxPages = useMemo(() => calculateMaxPages(amount, ProductConsts.LIMIT_ON_PAGE), [amount]);
  const isDisabled = !(maxPages - 1);
  const isMatchTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number): void => {
    dispatch(setPageAction({ page: value }));
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
      sx={concatSx(sxPagination, sx)}
      {...props}
    />
  );
}
