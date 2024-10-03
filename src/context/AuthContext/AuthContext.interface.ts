export interface IAuthTokens {
  token: string;
  refreshToken: string;
  anonToken: string;
}

export interface IAuthState {
  authTokens: IAuthTokens;
  setAuthTokens: React.Dispatch<React.SetStateAction<IAuthTokens>> | (() => void);
}
