import { usersApi } from '@/entities/user/api/usersApi';
import { userSlice } from '@/entities/user/model/user.slice';

export * from '@/entities/user/model/types/user.types';
export * from '@/entities/user/model/types/user.schemas';
export * from '@/entities/user/model/data/user.constants';

export { usersApi };
export const { useCheckIsUserExistByEmailMutation } = usersApi;

export const { selectLanguage, selectCountry, selectCurrency } = userSlice.selectors;
export const { setLanguageAction, setCountryAction, setCurrencyAction } = userSlice.actions;
