import { ClientResponse } from '@commercetools/sdk-client-v2';
import { CustomerPagedQueryResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import ApiClient from '@/services/ECommerceInitApi';

class ECommerceAPI {
  private apiRoot: ReturnType<ApiClient['getApiRoot']>;

  constructor() {
    this.apiRoot = new ApiClient().getApiRoot();
  }

  async createCustomer(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dateOfBirth: string,
    addresses: {
      country: string;
      postalCode: string;
      city: string;
    }[],
    billingAddresses: number[],
    shippingAddresses: number[]
  ): Promise<ClientResponse<CustomerSignInResult>> {
    return this.apiRoot
      .customers()
      .post({
        body: {
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          addresses,
          billingAddresses,
          shippingAddresses
        }
      })
      .execute() as Promise<ClientResponse<CustomerSignInResult>>;
  }

  async authenticateCustomer(email: string, password: string): Promise<ClientResponse<CustomerSignInResult>> {
    this.apiRoot = new ApiClient(email, password).getApiRoot();
    return this.apiRoot
      .me()
      .login()
      .post({
        body: {
          email,
          password
        }
      })
      .execute() as Promise<ClientResponse<CustomerSignInResult>>;
  }

  async returnCustomerByEmail(customerEmail: string): Promise<ClientResponse<CustomerPagedQueryResponse>> {
    return this.apiRoot
      .customers()
      .get({
        queryArgs: {
          where: `email="${customerEmail}"`
        }
      })
      .execute() as Promise<ClientResponse<CustomerPagedQueryResponse>>;
  }
}

export const eCommerceAPI = new ECommerceAPI();
