import type { TokenCache, TokenStore } from '@commercetools/sdk-client-v2';

export class MyTokenCache implements TokenCache {
  private tokenStore: TokenStore;

  constructor() {
    this.tokenStore = {
      token: '',
      expirationTime: 1,
      refreshToken: ''
    };
  }

  get(): TokenStore {
    return this.tokenStore;
  }

  set(cache: TokenStore): void {
    this.tokenStore = cache;
  }
}
