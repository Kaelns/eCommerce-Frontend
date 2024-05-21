import { ClientResponse } from '@commercetools/sdk-client-v2';
import { CustomerPagedQueryResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import ApiClient from '@/services/ECommerceInitApi';
import { ICreateCustomerParams } from '@/services/ECommerceInitApi.interface';

class ECommerceAPI {
  private apiRoot: ReturnType<ApiClient['getApiRoot']>;

  constructor() {
    this.apiRoot = new ApiClient().getApiRoot();
  }

  async createCustomer(params: ICreateCustomerParams): Promise<ClientResponse<CustomerSignInResult>> {
    const {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      addresses,
      shippingAddresses,
      billingAddresses,
      defaultBillingAddress,
      defaultShippingAddress
    } = params;
    this.apiRoot = new ApiClient().getApiRoot();
    const customerData: ICreateCustomerParams = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      addresses,
      shippingAddresses
    };

    if (billingAddresses !== undefined) {
      customerData.billingAddresses = billingAddresses;
    }
    if (defaultBillingAddress !== undefined) {
      customerData.defaultBillingAddress = defaultBillingAddress;
    }
    if (defaultShippingAddress !== undefined) {
      customerData.defaultShippingAddress = defaultShippingAddress;
    }
    return this.apiRoot
      .customers()
      .post({
        body: customerData
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
    this.apiRoot = new ApiClient().getApiRoot();
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
