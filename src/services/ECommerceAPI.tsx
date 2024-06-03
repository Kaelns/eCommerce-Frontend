import { ClientResponse } from '@commercetools/sdk-client-v2';
import {
  CustomerPagedQueryResponse,
  CustomerSignInResult,
  MyCustomerChangePassword,
  MyCustomerUpdate,
  ProductProjectionPagedSearchResponse
} from '@commercetools/platform-sdk';
import ApiClient from '@/services/ECommerceInitApi';
import { ICreateCustomerParams } from '@/services/ECommerceInitApi.interface';
import { checkUndefined } from '@/utils/checkUndefined';

class ECommerceAPI {
  private api: ApiClient;

  constructor() {
    this.api = new ApiClient();
  }

  public async createCustomer(params: ICreateCustomerParams): Promise<ClientResponse<CustomerSignInResult>> {
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
    const customerData: ICreateCustomerParams = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      addresses,
      shippingAddresses
    };

    if (checkUndefined(billingAddresses)) {
      customerData.billingAddresses = billingAddresses;
    }
    if (checkUndefined(defaultBillingAddress)) {
      customerData.defaultBillingAddress = defaultBillingAddress;
    }
    if (checkUndefined(defaultShippingAddress)) {
      customerData.defaultShippingAddress = defaultShippingAddress;
    }
    return this.api
      .getApiRoot()
      .customers()
      .post({
        body: customerData
      })
      .execute()
      .then((response) => {
        this.api.getTokenCache();
        return response;
      }) as Promise<ClientResponse<CustomerSignInResult>>;
  }

  public async authenticateCustomer(email: string, password: string): Promise<ClientResponse<CustomerSignInResult>> {
    return this.api
      .getApiRootWithPassword(email, password)
      .me()
      .login()
      .post({
        body: {
          email,
          password
        }
      })
      .execute()
      .then((response) => {
        this.api.getTokenCache();
        localStorage.setItem('Token', this.api.getTokenCache().get().token);
        return response;
      }) as Promise<ClientResponse<CustomerSignInResult>>;
  }

  public async returnCustomerByEmail(customerEmail: string): Promise<ClientResponse<CustomerPagedQueryResponse>> {
    return this.api
      .getApiRoot()
      .customers()
      .get({
        queryArgs: {
          where: `email="${customerEmail}"`
        }
      })
      .execute() as Promise<ClientResponse<CustomerPagedQueryResponse>>;
  }

  async getProductsAll(): Promise<ClientResponse<ProductProjectionPagedSearchResponse>> {
    return this.api
      .getApiRoot()
      .productProjections()
      .search()
      .get({ queryArgs: { filter: 'variants.attributes.color-filter.key:"#000", "#FFF"', offset: 0, limit: 10 } })
      .execute() as Promise<ClientResponse<ProductProjectionPagedSearchResponse>>;
  }

  public async getCategoryAll(): Promise<ClientResponse> {
    return this.api.getApiRoot().categories().get().execute() as Promise<ClientResponse>;
  }

  public async getUser(token: string): Promise<ClientResponse> {
    return this.api.getApiRootWithToken(token).me().get().execute() as Promise<ClientResponse>;
  }

  // this responce for update user data
  public async updateUser(token: string, body: MyCustomerUpdate): Promise<ClientResponse> {
    return this.api.getApiRootWithToken(token).me().post({ body }).execute() as Promise<ClientResponse>;
  }

  // this responce for update user passwword
  public async updateUserPassword(
    token: string,
    body: MyCustomerChangePassword,
    email: string,
    newPassword: string
  ): Promise<ClientResponse> {
    return this.api
      .getApiRootWithToken(token)
      .me()
      .password()
      .post({ body })
      .execute()
      .then(() => {
        this.logoutCustomer();
        this.authenticateCustomer(email, newPassword);
      }) as Promise<ClientResponse>;
  }

  public logoutCustomer(): void {
    this.api.getTokenCache().set({ token: '', expirationTime: 1, refreshToken: '' });
    localStorage.removeItem('Token');
  }
}

export const eCommerceAPI = new ECommerceAPI();
