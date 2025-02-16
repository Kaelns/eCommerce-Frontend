import { applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { ContainedBtn } from '@/components/buttons/ContainedBtn';

import { useAppDispatch } from '@/shared/redux/redux';

export function ApplyFiltersBtn() {
  const dispatch = useAppDispatch();

  const handleApplyFilters = (): void => {
    dispatch(applyFormFiltersAction());
  };

  return <ContainedBtn onClick={handleApplyFilters}>Apply</ContainedBtn>;
}
