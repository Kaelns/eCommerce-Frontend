import { authApi } from '@/entities/auth/api/authApi';
import { authSliceInjected } from '@/entities/auth/model/auth.slice';

export { authApi };
export const { useStartSessionQuery } = authApi;

export const { selectIsPendingAuth, selectIsLoggedAuth } = authSliceInjected.selectors;
export const { setIsLoggedAuthAction, setIsPendingAuthAction } = authSliceInjected.actions;
