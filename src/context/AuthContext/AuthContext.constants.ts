import { IAuthTokens, IAuthState } from '@/context/AuthContext/AuthContext.interface';

export const AUTH_TOKENS: IAuthTokens = { token: '', refreshToken: '', anonToken: '' };
export const INITIAL_AUTH_CONTEXT: IAuthState = { authTokens: AUTH_TOKENS, setAuthTokens(): void {} };
