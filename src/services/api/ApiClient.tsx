import { ClientBuilder, TokenStore, UserAuthOptions } from '@commercetools/sdk-client-v2';
import { ByProjectKeyRequestBuilder, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { CustomTokenCache } from '@/services/api/helpers/CustomTokenCache';
import { AuthMiddlewareType, IAuthMiddlewareOptions } from '@/services/api/data/types';
import { PROJECT_KEY, authMiddlewareOptions, httpMiddlewareOptions } from '@/services/api/data/constants';

// TODO handle potential errors

export class ApiClient {
  private tokenCache: CustomTokenCache;

  private apiRoot: ByProjectKeyRequestBuilder;

  constructor() {
    this.tokenCache = new CustomTokenCache();
    const clientBuilder = this.getClientBuilder(AuthMiddlewareType.DEFAULT).build();
    this.apiRoot = createApiBuilderFromCtpClient(clientBuilder).withProjectKey({ projectKey: PROJECT_KEY });
  }

  public getApiRoot(): ByProjectKeyRequestBuilder {
    return this.apiRoot;
  }

  public getApiRootAnonym(): ByProjectKeyRequestBuilder {
    const clientAnonym = this.getClientBuilder(AuthMiddlewareType.ANONYM).build();
    return createApiBuilderFromCtpClient(clientAnonym).withProjectKey({
      projectKey: PROJECT_KEY
    });
  }

  public getApiRootUser(user: UserAuthOptions): ByProjectKeyRequestBuilder {
    const clientUser = this.getClientBuilder(AuthMiddlewareType.USER, user).build();
    return createApiBuilderFromCtpClient(clientUser).withProjectKey({
      projectKey: PROJECT_KEY
    });
  }

  public getApiRootUserRefreshToken(): ByProjectKeyRequestBuilder {
    const clientUser = this.getClientBuilder(AuthMiddlewareType.USER_REFRESH_TOKEN).build();
    return createApiBuilderFromCtpClient(clientUser).withProjectKey({
      projectKey: PROJECT_KEY
    });
  }

  // TODO Check token problem
  public getApiRootToken(): ByProjectKeyRequestBuilder {
    const clientWithToken = this.getClientBuilder(AuthMiddlewareType.TOKEN).build();
    return createApiBuilderFromCtpClient(clientWithToken).withProjectKey({
      projectKey: PROJECT_KEY
    });
  }

  private getClientBuilder<T extends AuthMiddlewareType>(
    type: T,
    user?: T extends AuthMiddlewareType.USER ? UserAuthOptions : undefined
  ): ClientBuilder {
    const client = new ClientBuilder().withProjectKey(PROJECT_KEY).withHttpMiddleware(httpMiddlewareOptions);
    if (import.meta.env.DEV) {
      client.withLoggerMiddleware();
    }

    switch (type) {
      case AuthMiddlewareType.ANONYM:
        client.withAnonymousSessionFlow(this.getAuthMiddlewareOptions(AuthMiddlewareType.ANONYM));
        break;
      case AuthMiddlewareType.USER:
        client.withPasswordFlow(this.getAuthMiddlewareOptions(AuthMiddlewareType.USER, user));
        break;
      case AuthMiddlewareType.USER_REFRESH_TOKEN:
        client.withRefreshTokenFlow(this.getAuthMiddlewareOptions(AuthMiddlewareType.USER_REFRESH_TOKEN));
        break;
      case AuthMiddlewareType.TOKEN:
        client.withExistingTokenFlow(...this.getAuthMiddlewareOptions(AuthMiddlewareType.TOKEN));
        break;
      default:
        client.withClientCredentialsFlow(this.getAuthMiddlewareOptions(AuthMiddlewareType.DEFAULT));
    }
    return client;
  }

  private getAuthMiddlewareOptions<T extends AuthMiddlewareType>(
    type: T,
    user?: T extends AuthMiddlewareType.USER ? UserAuthOptions : undefined
  ): IAuthMiddlewareOptions[T];
  private getAuthMiddlewareOptions(
    type: AuthMiddlewareType,
    user?: UserAuthOptions
  ): IAuthMiddlewareOptions[AuthMiddlewareType] {
    switch (type) {
      case AuthMiddlewareType.ANONYM: {
        return { ...authMiddlewareOptions, ...{ tokenCache: this.tokenCache } };
      }
      case AuthMiddlewareType.USER: {
        return {
          ...authMiddlewareOptions,
          ...{
            tokenCache: this.tokenCache,
            credentials: {
              ...authMiddlewareOptions.credentials,
              ...{ user }
            }
          }
        };
      }
      case AuthMiddlewareType.USER_REFRESH_TOKEN: {
        const refreshToken = this.tokenCache.get().refreshToken!;
        return {
          ...authMiddlewareOptions,
          ...{ tokenCache: this.tokenCache, refreshToken }
        };
      }
      case AuthMiddlewareType.TOKEN: {
        const authorization = `Bearer ${this.tokenCache.get().token}`;
        const tokenOptions = { force: true };
        return [authorization, tokenOptions];
      }
      default: {
        // FIXME
        return { ...authMiddlewareOptions, ...{ tokenCache: this.tokenCache } };
      }
    }
  }

  public getTokenCache(): Readonly<TokenStore> {
    return this.tokenCache.get();
  }

  public setTokenCache(tokenStore: TokenStore): void {
    this.tokenCache.set(tokenStore);
  }
}

export const apiClient = new ApiClient();
