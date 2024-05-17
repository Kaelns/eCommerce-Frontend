import {
  Client,
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions
} from '@commercetools/sdk-client-v2';

import { ByProjectKeyRequestBuilder, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

class ApiClient {
  private authMiddlewareOptions: AuthMiddlewareOptions;

  private httpMiddlewareOptions: HttpMiddlewareOptions;

  private ctpClient: Client;

  private projectKey: string;

  constructor() {
    this.projectKey = 'radioreactiveecomapp';
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
    return new ClientBuilder()
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

export default ApiClient;
