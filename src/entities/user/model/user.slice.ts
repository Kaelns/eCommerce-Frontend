import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { USER_INIT_COUNTRY, USER_INIT_LANGUAGE } from '@/entities/user/model/data/user.constants';

import { rootReducer } from '@/app/store/config';

const INIT_USER = {
  country: USER_INIT_COUNTRY,
  language: USER_INIT_LANGUAGE
};

const userSliceLazy = createSlice({
  name: 'user',
  initialState: INIT_USER,
  selectors: {
    selectLanguage: (state) => state.language,
    selectCountry: (state) => state.country
  },
  reducers: {
    setLanguageAction(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setCountryAction(state, action: PayloadAction<string>) {
      state.country = action.payload;
    }
  }
});

export const userSliceInjected = userSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof userSliceLazy> {}
}
