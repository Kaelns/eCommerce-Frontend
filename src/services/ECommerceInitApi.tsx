import {
  Client,
  ClientBuilder,
  ExistingTokenMiddlewareOptions,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions
} from '@commercetools/sdk-client-v2';
import { ByProjectKeyRequestBuilder, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { PROJECT_KEY, CLIENT_ID, CLIENT_SECRET, AUTH_HOST, API_HOST, SCOPES } from './ECommerceInitApi.constants';
import { MyTokenCache } from '@/services/Mytoken';

class ECommerceInitApi {
  private authMiddlewareOptions: AuthMiddlewareOptions;

  private httpMiddlewareOptions: HttpMiddlewareOptions;

  private projectKey: string;

  private tokenCache: MyTokenCache;

  constructor() {
    this.projectKey = PROJECT_KEY;
    this.tokenCache = new MyTokenCache();

    this.authMiddlewareOptions = {
      host: AUTH_HOST,
      projectKey: PROJECT_KEY,
      credentials: {
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET
      },
      scopes: SCOPES,
      fetch
    };

    this.httpMiddlewareOptions = {
      host: API_HOST,
      fetch
    };
  }

  private createClient(): Client {
    return new ClientBuilder()
      .withProjectKey(this.projectKey)
      .withClientCredentialsFlow(this.authMiddlewareOptions)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }

  private createClientWithPassword(email: string, password: string): Client {
    const passwordAuthMiddlewareOptions = {
      host: AUTH_HOST,
      projectKey: PROJECT_KEY,
      credentials: {
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        user: {
          username: email,
          password
        }
      },
      scopes: SCOPES,
      fetch,
      tokenCache: this.tokenCache
    };
    return new ClientBuilder()
      .withProjectKey(this.projectKey)
      .withPasswordFlow(passwordAuthMiddlewareOptions)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }

  public getApiRoot(): ByProjectKeyRequestBuilder {
    return createApiBuilderFromCtpClient(this.createClient()).withProjectKey({ projectKey: this.projectKey });
  }

  public getApiRootWithPassword(email: string, password: string): ByProjectKeyRequestBuilder {
    return createApiBuilderFromCtpClient(this.createClientWithPassword(email, password)).withProjectKey({
      projectKey: this.projectKey
    });
  }

  public getTokenCache(): MyTokenCache {
    console.log(this.tokenCache.get().token);
    return this.tokenCache;
  }

  private createClientWithWithToken(token: string): Client {
    const authorization = `Bearer ${token}`;
    const options: ExistingTokenMiddlewareOptions = {
      force: true
    };
    return new ClientBuilder()
      .withExistingTokenFlow(authorization, options)
      .withProjectKey(this.projectKey)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }

  public getApiRootWithToken(token: string): ByProjectKeyRequestBuilder {
    return createApiBuilderFromCtpClient(this.createClientWithWithToken(token)).withProjectKey({
      projectKey: this.projectKey
    });
  }
}

export default ECommerceInitApi;
