export interface IAuthState {
  authUserToken: string;
  setAuthUserToken: React.Dispatch<React.SetStateAction<string>> | (() => void);
}
