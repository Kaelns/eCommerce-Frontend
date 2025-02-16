import type { AppThunk, AppThunkDispatch } from '@/shared/redux/redux';

import { debounce } from '@/utils/side-effects/debounce';
import { setSearchAction, applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

const debounceDispatchSearchQueryArgs = debounce((dispatch: AppThunkDispatch) => dispatch(applyFormFiltersAction()), 1500);

export const debounceSearchToQueryArgs =
  (search: string): AppThunk =>
  (dispatch) => {
    dispatch(setSearchAction(search));
    debounceDispatchSearchQueryArgs(dispatch);
  };
