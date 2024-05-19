import {
  Client,
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  type PasswordAuthMiddlewareOptions
} from '@commercetools/sdk-client-v2';

import { ByProjectKeyRequestBuilder, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

class ECommerceInitApi {
  private authMiddlewareOptions: AuthMiddlewareOptions;

  private httpMiddlewareOptions: HttpMiddlewareOptions;

  private passwordAuthMiddlewareOptions!: PasswordAuthMiddlewareOptions;

  private ctpClient: Client;

  private projectKey: string;

  private email;

  private password;

  constructor(email?: string, password?: string) {
    this.projectKey = 'radioreactiveecomapp';
    if (email && password) {
      this.email = email;
      this.password = password;
      this.passwordAuthMiddlewareOptions = {
        host: 'https://auth.europe-west1.gcp.commercetools.com',
        projectKey: 'radioreactiveecomapp',
        credentials: {
          clientId: 'a-i4goMEIaGWWNkzXrrkc4_G',
          clientSecret: 'zODzfkzBmfaH7Vp9tiukg3kabhgIbFWq',
          user: {
            username: this.email,
            password: this.password
          }
        },
        scopes: [
          'manage_project:radioreactiveecomapp view_audit_log:radioreactiveecomapp view_api_clients:radioreactiveecomapp manage_api_clients:radioreactiveecomapp'
        ],
        fetch
      };
    }
    this.authMiddlewareOptions = {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'radioreactiveecomapp',
      credentials: {
        clientId: 'a-i4goMEIaGWWNkzXrrkc4_G',
        clientSecret: 'zODzfkzBmfaH7Vp9tiukg3kabhgIbFWq'
      },
      scopes: [
        'manage_project:radioreactiveecomapp view_audit_log:radioreactiveecomapp view_api_clients:radioreactiveecomapp manage_api_clients:radioreactiveecomapp'
      ],
      fetch
    };

    this.httpMiddlewareOptions = {
      host: 'https://api.europe-west1.gcp.commercetools.com',
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
