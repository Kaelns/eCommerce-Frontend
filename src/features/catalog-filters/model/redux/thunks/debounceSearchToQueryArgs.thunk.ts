import type { AppThunk, AppThunkDispatch } from '@/shared/lib/redux/redux.types';

import { selectLanguage } from '@/entities/user';

import { setSearchAction, applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { debounce } from '@/shared/lib/utils/side-effects/debounce';

const debounceDispatchSearchQueryArgs = debounce(
  (dispatch: AppThunkDispatch, language: string) => dispatch(applyFormFiltersAction({ language })),
  1500
);

export const debounceSearchToQueryArgs =
  (search: string): AppThunk =>
  (dispatch, getState) => {
    const language = selectLanguage(getState());
    dispatch(setSearchAction(search));
    debounceDispatchSearchQueryArgs(dispatch, language);
  };
