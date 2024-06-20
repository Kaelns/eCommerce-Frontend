import {
  Cart,
  Category,
  CategoryPagedQueryResponse,
  ClientResponse,
  CustomerPagedQueryResponse,
  CustomerSignInResult,
  MyCartUpdateAction,
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
import { KEY_ANON_TOKEN, KEY_AUTH_USER_TOKEN } from '@/hooks/useAuthStorage/useAuthStorage.constants';

class ECommerceAPI {
  private api: ApiClient;

  public categories: Category[] = [];

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
        this.api.getApiRootWithPassword(email, password);
        return response;
      }) as Promise<ClientResponse<CustomerSignInResult>>;
  }

  public async authenticateCustomer(email: string, password: string): Promise<string> {
    await this.api
      .getApiRootWithPassword(email, password)
      .me()
      .login()
      .post({
        body: {
          email,
          password,
          activeCartSignInMode: 'MergeWithExistingCustomerCart'
        }
      })
      .execute();
    return this.api.getTokenCache().get().token;
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
    parameters: IConvertToFilterParamsReturn,
    amount = LIMIT_ON_PAGE
  ): Promise<ClientResponse<ProductProjectionPagedSearchResponse>> {
    return this.api
      .getApiRoot()
      .productProjections()
      .search()
      .get({ queryArgs: { limit: amount, ...parameters } })
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
  public async createAnonymousUser(): Promise<string> {
    await this.api.getApiRootWithAnonymousSession().get().execute();
    return this.api.getTokenCache().get().token;
  }

  public async getCart(token: string): Promise<Cart> {
    return this.api
      .getApiRootWithToken(token)
      .me()
      .carts()
      .get()
      .execute()
      .then((responce) => responce.body.results[0]) as Promise<Cart>;
  }

  // this request for create Cart
  public async createCart(token: string): Promise<Cart> {
    const cartDraft = {
      currency: 'USD',
      country: 'US'
    };
    return this.api
      .getApiRootWithToken(token)
      .me()
      .carts()
      .post({ body: cartDraft })
      .execute()
      .then((responce) => responce.body) as Promise<Cart>;
  }

  public async updateCart(
    token: string,
    cartId: string,
    version: number,
    actionObj: MyCartUpdateAction
  ): Promise<ClientResponse<Cart>> {
    return this.api
      .getApiRootWithToken(token)
      .me()
      .carts()
      .withId({ ID: cartId })
      .post({
        body: {
          version,
          actions: [actionObj]
        }
      })
      .execute() as Promise<ClientResponse<Cart>>;
  }

  // this request for delete Cart
  public async deleteCart(token: string, cartId: string, cartVersion: number): Promise<ClientResponse> {
    return this.api
      .getApiRootWithToken(token)
      .carts()
      .withId({ ID: cartId })
      .delete({
        queryArgs: {
          version: cartVersion
        }
      })
      .execute();
  }

  public async createAnonymousCart(): Promise<string> {
    await this.createAnonymousUser();
    const anonToken = this.api.getTokenCache().get().token;
    await this.createCart(anonToken);
    return anonToken;
  }

  // this Request for update user passwword
  public async updateUserPassword(
    token: string,
    body: MyCustomerChangePassword,
    email: string,
    newPassword: string,
    setIsActualData: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> {
    await this.api.getApiRootWithToken(token).me().password().post({ body }).execute();
    this.logoutCustomer();
    await this.authenticateCustomer(email, newPassword);
    setIsActualData(false);
  }

  public async logoutCustomer(): Promise<string> {
    this.api.getTokenCache().set({ token: '', expirationTime: 1, refreshToken: '' });
    localStorage.removeItem(KEY_AUTH_USER_TOKEN);
    localStorage.removeItem(KEY_ANON_TOKEN);
    const anonToken = await this.createAnonymousUser();
    const data = await this.createCart(this.api.getTokenCache().get().token);
    // Todo: change from localStorage
    localStorage.setItem('anonymousCart', data.id);
    return anonToken;
  }
}

export const eCommerceAPI = new ECommerceAPI();
