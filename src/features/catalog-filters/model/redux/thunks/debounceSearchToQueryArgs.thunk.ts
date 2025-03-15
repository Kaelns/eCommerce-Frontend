import type { AppThunk, AppThunkDispatch } from '@/shared/lib/redux/redux.types';

import { setSearchAction, applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { debounce } from '@/shared/lib/utils/side-effects/debounce';

const debounceDispatchSearchQueryArgs = debounce((dispatch: AppThunkDispatch) => dispatch(applyFormFiltersAction()), 1500);

export const debounceSearchToQueryArgs =
  (search: string): AppThunk =>
  (dispatch) => {
    dispatch(setSearchAction(search));
    debounceDispatchSearchQueryArgs(dispatch);
  };
