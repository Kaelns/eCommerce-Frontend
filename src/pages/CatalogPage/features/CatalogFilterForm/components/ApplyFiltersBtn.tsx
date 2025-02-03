import { ContainedBtn } from '@/components/buttons/ContainedBtn';

export function ApplyFiltersBtn() {
  // const dispatch = useAppDispatch();

  const handleApplyFilters = (): void => {
    // TODO
    // dispatch(applyFiltersAction());
  };

  return <ContainedBtn onClick={handleApplyFilters}>Apply</ContainedBtn>;
}
