import type { AppThunk, AppThunkDispatch } from '@/shared/redux/redux';

import { setSearchAction, applyFiltersAction } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';

import { debounce } from '@/utils/side-effects/debounce';

const debounceDispatchSearchQueryArgs = debounce((dispatch: AppThunkDispatch) => dispatch(applyFiltersAction()), 1500);

export const debounceSearchToQueryArgs =
  (search: string): AppThunk =>
  (dispatch) => {
    dispatch(setSearchAction(search));
    debounceDispatchSearchQueryArgs(dispatch);
  };
