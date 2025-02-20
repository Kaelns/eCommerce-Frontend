import { usersApi } from '@/entities/user/api/usersApi';
import { userSliceInjected } from '@/entities/user/model/user.slice';

export * from '@/entities/user/model/types/user.types';
export * from '@/entities/user/model/types/user.schemas';
export * from '@/entities/user/model/data/user.constants';

export { usersApi };
export const { useCheckIsUserExistByEmailMutation } = usersApi;

export const { selectLanguage } = userSliceInjected.selectors;
export const { setLanguageAction } = userSliceInjected.actions;
