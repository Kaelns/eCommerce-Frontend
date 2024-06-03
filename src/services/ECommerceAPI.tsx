import { ClientResponse } from '@commercetools/sdk-client-v2';
import {
  Category,
  CategoryPagedQueryResponse,
  CustomerPagedQueryResponse,
  CustomerSignInResult,
  ProductProjectionPagedSearchResponse
} from '@commercetools/platform-sdk';
import ApiClient from '@/services/ECommerceInitApi';
import { ICreateCustomerParams } from '@/services/ECommerceInitApi.interface';
import { checkUndefined } from '@/utils/checkUndefined';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';
import { ITreeNode } from '@/data/interface/ITreeNode';

class ECommerceAPI {
  private api: ApiClient;

  public categories: Category[] = [];

  public categoriesTree: ITreeNode[] = [];

  constructor() {
    this.api = new ApiClient();
    this.getCategoryAll();
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
        this.api.getApiRootWithPassword(email, password);
        return response;
      }) as Promise<ClientResponse<CustomerSignInResult>>;
  }

  async authenticateCustomer(email: string, password: string): Promise<ClientResponse<CustomerSignInResult>> {
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
        return response;
      }) as Promise<ClientResponse<CustomerSignInResult>>;
  }

  async returnCustomerByEmail(customerEmail: string): Promise<ClientResponse<CustomerPagedQueryResponse>> {
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
      .get({ queryArgs: { sort: 'price desc' } })
      .execute() as Promise<ClientResponse<ProductProjectionPagedSearchResponse>>;
  }

  // .get({ queryArgs: { limit: 5, 'filter.query': 'variants.attributes.color-filter.key:"#000"' } })

  async getCategoryAll(): Promise<void> {
    const responce = await (this.api.getApiRoot().categories().get().execute() as Promise<
      ClientResponse<CategoryPagedQueryResponse>
    >);
    this.categories = responce.body!.results;
    this.categoriesTree = buildCategoryTree(this.categories);
  }

  async getUser(): Promise<ClientResponse> {
    return this.api
      .getApiRootWithAccesToken(this.api.getTokenCache().get().token)
      .me()
      .get()
      .execute() as Promise<ClientResponse>;
  }

  public logoutCustomer(): void {
    this.api.getTokenCache().set({ token: '', expirationTime: 1, refreshToken: '' });
    localStorage.removeItem('tokenCache');
  }
}

export const eCommerceAPI = new ECommerceAPI();
