import type { TokenCache, TokenStore } from '@commercetools/sdk-client-v2';

export class CustomTokenCache implements TokenCache {
  private token: TokenStore['token'];

  private expirationTime: TokenStore['expirationTime'];

  private refreshToken: TokenStore['refreshToken'];

  constructor() {
    this.token = '';
    this.refreshToken = '';
    this.expirationTime = 1;
  }

  get(): Readonly<TokenStore> {
    return {
      token: this.token,
      refreshToken: this.refreshToken,
      expirationTime: this.expirationTime
    };
  }

  set(cache: TokenStore): void {
    this.token = cache.token;
    this.expirationTime = cache.expirationTime;
    this.refreshToken = cache.refreshToken;
  }
}
