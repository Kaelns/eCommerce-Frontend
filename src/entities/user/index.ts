import { userSlice } from '@/entities/user/model/user.slice';

export * from '@/entities/user/model/types/user.types';
export * from '@/entities/user/model/types/user.schemas';
export * from '@/entities/user/model/data/user.constants';

export const { selectLanguage, selectCurrency, selectCountry } = userSlice.selectors;
export const { setLanguageAction, setCurrencyAction } = userSlice.actions;
