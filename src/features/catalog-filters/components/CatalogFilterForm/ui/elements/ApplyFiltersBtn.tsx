import type { ButtonProps } from '@mui/material';

import { applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { ContainedBtn } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

export function ApplyFiltersBtn({ sx = {} }: ButtonProps) {
  const dispatch = useAppDispatch();

  const handleApplyFilters = (): void => {
    dispatch(applyFormFiltersAction());
  };

  return (
    <ContainedBtn onClick={handleApplyFilters} sx={sx}>
      Apply
    </ContainedBtn>
  );
}
