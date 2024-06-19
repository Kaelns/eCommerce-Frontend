import { IAuthTokens } from '@/context/AuthContext/AuthContext.interface';

interface IUseAuthStorageReturn {
  authTokens: IAuthTokens;
  isLoading: boolean;
}

export type { IUseAuthStorageReturn };
