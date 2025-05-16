export * from '@/entities/user/model/types/user.types';
export * from '@/entities/user/model/data/user.navbars';
export * from '@/entities/user/model/data/user.constants';

import { userSlice } from '@/entities/user/model/user.slice';

export { UserPriceText } from '@/entities/user/ui/UserPriceText';
export { UserPopoverMenu } from '@/entities/user/ui/UserPopoverMenu';
export { UserFullPriceText } from '@/entities/user/ui/UserFullPriceText';

export const { selectLanguage, selectCountry } = userSlice.selectors;
export const { setLanguageAction, setCurrencyAction } = userSlice.actions;
