import { applyFormFiltersAction } from '@/features/catalog-filters';

import { ContainedBtn } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

export function ApplyFiltersBtn() {
  const dispatch = useAppDispatch();

  const handleApplyFilters = (): void => {
    dispatch(applyFormFiltersAction());
  };

  return <ContainedBtn onClick={handleApplyFilters}>Apply</ContainedBtn>;
}
