import type { Currencies } from '@/shared/model/types';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { USER_INIT_COUNTRY, USER_INIT_LANGUAGE, USER_INIT_CURRENCY } from '@/entities/user/model/data/user.constants';

import { rootReducer } from '@/shared/lib/redux';

const INIT_USER = {
  country: USER_INIT_COUNTRY,
  language: USER_INIT_LANGUAGE,
  currency: USER_INIT_CURRENCY
};

const userSliceLazy = createSlice({
  name: 'user',
  initialState: INIT_USER,
  selectors: {
    selectLanguage: (state) => state.language,
    selectCountry: (state) => state.country,
    selectCurrency: (state) => state.currency
  },
  reducers: {
    setLanguageAction(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setCountryAction(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    setCurrencyAction(state, action: PayloadAction<Currencies>) {
      state.currency = action.payload;
    }
  }
});

export const userSlice = userSliceLazy.injectInto(rootReducer);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof userSliceLazy> {}
}

export const { selectCurrency } = userSlice.selectors;
