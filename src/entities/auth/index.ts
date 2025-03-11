import { authApi } from '@/entities/auth/api/authApi';
import { authSlice } from '@/entities/auth/model/auth.slice';

export * from '@/entities/auth/model/auth.types';

export { authApi };
export const { useStartSessionQuery } = authApi;

export const { selectIsLoggedAuth } = authSlice.selectors;
