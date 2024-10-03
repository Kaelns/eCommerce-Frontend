import {
  AnonymousAuthMiddlewareOptions,
  AuthMiddlewareOptions,
  ExistingTokenMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  RefreshAuthMiddlewareOptions
} from '@commercetools/sdk-client-v2';

type ITokenAuthMiddlewareProps = [string, ExistingTokenMiddlewareOptions];

export enum Errors {
  MIDDLEWARE_USER_DATA = 'Error: user data is missing',
  MIDDLEWARE_REFRESH_TOKEN = 'Error: refresh token is missing'
}

export type AuthMiddlewareOptionsUnion =
  | AuthMiddlewareOptions
  | AnonymousAuthMiddlewareOptions
  | PasswordAuthMiddlewareOptions
  | RefreshAuthMiddlewareOptions
  | ITokenAuthMiddlewareProps;

export enum AuthMiddlewareType {
  DEFAULT = 'DEFAULT',
  ANONYM = 'ANONYM',
  USER = 'USER',
  USER_REFRESH_TOKEN = 'USER_REFRESH_TOKEN',
  TOKEN = 'TOKEN'
}

export interface IAuthMiddlewareOptions {
  [AuthMiddlewareType.DEFAULT]: AuthMiddlewareOptions;
  [AuthMiddlewareType.ANONYM]: AnonymousAuthMiddlewareOptions;
  [AuthMiddlewareType.USER]: PasswordAuthMiddlewareOptions;
  [AuthMiddlewareType.USER_REFRESH_TOKEN]: RefreshAuthMiddlewareOptions;
  [AuthMiddlewareType.TOKEN]: ITokenAuthMiddlewareProps;
}
