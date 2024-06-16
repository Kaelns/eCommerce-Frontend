import {
  Category,
  CategoryPagedQueryResponse,
  ClientResponse,
  CustomerPagedQueryResponse,
  CustomerSignInResult,
  MyCustomerChangePassword,
  MyCustomerUpdate,
  ProductProjection,
  ProductProjectionPagedSearchResponse
} from '@commercetools/platform-sdk';
import ApiClient from '@/services/ECommerceInitApi';
import { ICreateCustomerParams } from '@/services/ECommerceInitApi.interface';
import { checkUndefined } from '@/utils/checkUndefined';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';
import { IConvertToFilterParamsReturn } from '@/services/helpers/convertToFilterParams/convertToFilterParams.interface';
import { ICategoriesObj } from '@/context/ECommerceContext/ECommerceContext.interface';
import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';

class ECommerceAPI {
  private api: ApiClient;

  public categories: Category[] = [];

  constructor() {
    this.api = new ApiClient();
    this.createAnonymousCart();
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
        this.api.getApiRootWithPassword(email, password);
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

  async getProductsAll(
    parameters: IConvertToFilterParamsReturn
  ): Promise<ClientResponse<ProductProjectionPagedSearchResponse>> {
    return this.api
      .getApiRoot()
      .productProjections()
      .search()
      .get({ queryArgs: { limit: LIMIT_ON_PAGE, ...parameters } })
      .execute() as Promise<ClientResponse<ProductProjectionPagedSearchResponse>>;
  }

  public async getProduct(key: string): Promise<ClientResponse<ProductProjection>> {
    return this.api.getApiRoot().productProjections().withKey({ key }).get().execute() as Promise<
      ClientResponse<ProductProjection>
    >;
  }

  async getCategoryAll(): Promise<ICategoriesObj> {
    const responce = await (this.api.getApiRoot().categories().get().execute() as Promise<
      ClientResponse<CategoryPagedQueryResponse>
    >);
    const categories = responce.body!.results;
    const categoriesTree = buildCategoryTree(categories);
    this.categories = categories;
    return { categories, categoriesTree };
  }

  public async getUser(token: string): Promise<ClientResponse> {
    return this.api.getApiRootWithToken(token).me().get().execute() as Promise<ClientResponse>;
  }

  // this Request for update user data
  public async updateUser(token: string, body: MyCustomerUpdate): Promise<ClientResponse> {
    return this.api.getApiRootWithToken(token).me().post({ body }).execute() as Promise<ClientResponse>;
  }

  // this request for create anonymousCart
  public async createAnonymousCart(): Promise<ClientResponse> {
    const cartDraft = {
      currency: 'USD',
      country: 'US'
    };

    return this.api
      .getApiRootWithAnonymousSession(false)
      .carts()
      .post({ body: cartDraft })
      .execute()
      .then((res) => {
        console.log(res.body.id);
      }) as Promise<ClientResponse>;
  }

  // this Request for update user passwword
  public async updateUserPassword(
    token: string,
    body: MyCustomerChangePassword,
    email: string,
    newPassword: string,
    setIsActualData: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<ClientResponse> {
    return this.api
      .getApiRootWithToken(token)
      .me()
      .password()
      .post({ body })
      .execute()
      .then(() => {
        this.logoutCustomer();
        this.authenticateCustomer(email, newPassword).then(() => {
          setIsActualData(false);
        });
      }) as Promise<ClientResponse>;
  }

  public logoutCustomer(): void {
    this.api.getTokenCache().set({ token: '', expirationTime: 1, refreshToken: '' });
    localStorage.removeItem('Token');
    this.api.getApiRootWithAnonymousSession(false);
  }
}

export const eCommerceAPI = new ECommerceAPI();
