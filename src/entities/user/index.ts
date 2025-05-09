export * from '@/entities/user/model/types/user.types';
export * from '@/entities/user/model/data/user.navbars';
export * from '@/entities/user/model/data/user.constants';

import { userSlice } from '@/entities/user/model/user.slice';

export { UserPopoverMenu } from '@/entities/user/ui/UserPopoverMenu';

export const { selectLanguage, selectCurrency, selectCountry } = userSlice.selectors;
export const { setLanguageAction, setCurrencyAction } = userSlice.actions;
