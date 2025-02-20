import { selectLanguage } from '@/entities/user';

import { applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { ContainedBtn } from '@/shared/ui/elements/buttons/ContainedBtn';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

export function ApplyFiltersBtn() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);

  const handleApplyFilters = (): void => {
    dispatch(applyFormFiltersAction({ language }));
  };

  return <ContainedBtn onClick={handleApplyFilters}>Apply</ContainedBtn>;
}
