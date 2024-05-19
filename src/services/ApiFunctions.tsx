import {
  Client,
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  type PasswordAuthMiddlewareOptions
} from '@commercetools/sdk-client-v2';
import { ByProjectKeyRequestBuilder, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { PROJECT_KEY, CLIENT_ID, CLIENT_SECRET, AUTH_HOST, API_HOST, SCOPES } from './ApiRoot.constants';

class ECommerceInitApi {
  private authMiddlewareOptions: AuthMiddlewareOptions;

  private httpMiddlewareOptions: HttpMiddlewareOptions;

  private passwordAuthMiddlewareOptions!: PasswordAuthMiddlewareOptions;

  private ctpClient: Client;

  private projectKey: string;

  private email?: string;

  private password?: string;

  constructor(email?: string, password?: string) {
    this.projectKey = PROJECT_KEY;
    if (email && password) {
      this.email = email;
      this.password = password;
      this.passwordAuthMiddlewareOptions = {
        host: AUTH_HOST,
        projectKey: PROJECT_KEY,
        credentials: {
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          user: {
            username: this.email,
            password: this.password
          }
        },
        scopes: SCOPES,
        fetch
      };
    }
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

    this.ctpClient = this.createClient();
  }

  private createClient(): Client {
    return this.email
      ? new ClientBuilder()
          .withProjectKey(this.projectKey)
          .withClientCredentialsFlow(this.authMiddlewareOptions)
          .withHttpMiddleware(this.httpMiddlewareOptions)
          .withLoggerMiddleware()
          .withPasswordFlow(this.passwordAuthMiddlewareOptions)
          .build()
      : new ClientBuilder()
          .withProjectKey(this.projectKey)
          .withClientCredentialsFlow(this.authMiddlewareOptions)
          .withHttpMiddleware(this.httpMiddlewareOptions)
          .withLoggerMiddleware()
          .build();
  }

  public getApiRoot(): ByProjectKeyRequestBuilder {
    return createApiBuilderFromCtpClient(this.ctpClient).withProjectKey({ projectKey: this.projectKey });
  }
}

export default ECommerceInitApi;
