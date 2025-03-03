import { applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { ContainedBtn } from '@/shared/ui/elements/buttons/ContainedBtn';

import { useAppDispatch } from '@/shared/lib/redux/redux.hooks';

export function ApplyFiltersBtn() {
  const dispatch = useAppDispatch();

  const handleApplyFilters = (): void => {
    dispatch(applyFormFiltersAction());
  };

  return <ContainedBtn onClick={handleApplyFilters}>Apply</ContainedBtn>;
}
