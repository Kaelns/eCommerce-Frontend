import {
  Cart,
  Category,
  ClientResponse,
  Customer,
  CustomerPagedQueryResponse,
  MyCartUpdateAction,
  MyCustomerChangePassword,
  MyCustomerUpdate,
  ProductProjection,
  ProductProjectionPagedSearchResponse
} from '@commercetools/platform-sdk';
import { TokenStore, UserAuthOptions } from '@commercetools/sdk-client-v2';
import { ApiClient } from '@/services/api/ApiClient';
import { ICreateUserParams } from '@/services/ECommerceInitApi.interface';
import { IConvertToFilterParamsReturn } from '@/services/helpers/convertToFilterParams/convertToFilterParams.interface';
import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';
import { filterUndefinedProperties } from '@/utils/filterUndefinedProperties';

class ECommerceAPI {
  private api: ApiClient;

  public categories: Category[] = [];

  constructor() {
    this.api = new ApiClient();
  }

  public async createUser(params: ICreateUserParams /* , token: string */): Promise<TokenStore> {
    const customerData: ICreateUserParams = filterUndefinedProperties(params);
    const oldToken = this.api.getTokenCache().token;
    const responce = await this.api.getApiRoot().customers().post({ body: customerData }).execute();
    // TODO remove log
    console.log('CreateUser result', responce, oldToken, this.api.getTokenCache().token);
    return this.api.getTokenCache();
  }

  public async createAnonymousUser(): Promise<TokenStore> {
    await this.api.getApiRootAnonym().get().execute();
    return this.api.getTokenCache();
  }

  public async authenticateUser(email: string, password: string): Promise<TokenStore> {
    const userAuthOptions: UserAuthOptions = { username: email, password };
    await this.api
      .getApiRootUser(userAuthOptions)
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
    return this.api.getTokenCache();
  }

  public async returnUserByEmail(customerEmail: string): Promise<ClientResponse<CustomerPagedQueryResponse>> {
    return this.api
      .getApiRoot()
      .customers()
      .get({
        queryArgs: {
          where: `email="${customerEmail}"`
        }
      })
      .execute();
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
      .execute();
  }

  public async getProduct(key: string): Promise<ClientResponse<ProductProjection>> {
    return this.api.getApiRoot().productProjections().withKey({ key }).get().execute();
  }

  async getCategoryAll(): Promise<Category[]> {
    const responce = await this.api.getApiRoot().categories().get().execute();
    return responce.body.results;
  }

  public async getUser(): Promise<ClientResponse<Customer>> {
    return this.api.getApiRootToken().me().get().execute();
  }

  // this Request for update user data
  public async updateUser(body: MyCustomerUpdate): Promise<ClientResponse<Customer>> {
    return this.api.getApiRootToken().me().post({ body }).execute();
  }

  public async getCart(): Promise<Cart> {
    return this.api
      .getApiRootToken()
      .me()
      .carts()
      .get()
      .execute()
      .then((responce) => responce.body.results[0]);
  }

  // this request for create Cart
  public async createCart(): Promise<Cart> {
    // TODO Check cartDraft
    const cartDraft = {
      currency: 'USD',
      country: 'US'
    };
    return this.api
      .getApiRootToken()
      .me()
      .carts()
      .post({ body: cartDraft })
      .execute()
      .then((responce) => responce.body);
  }

  public async updateCart(
    cartId: string,
    version: number,
    actionObj: MyCartUpdateAction
  ): Promise<ClientResponse<Cart>> {
    return this.api
      .getApiRootToken()
      .me()
      .carts()
      .withId({ ID: cartId })
      .post({
        body: {
          version,
          actions: [actionObj]
        }
      })
      .execute();
  }

  // this request for delete Cart
  public async deleteCart(cartId: string, cartVersion: number): Promise<ClientResponse> {
    return this.api
      .getApiRootToken()
      .carts()
      .withId({ ID: cartId })
      .delete({
        queryArgs: {
          version: cartVersion
        }
      })
      .execute();
  }

  // this Request for update user password
  public async updateUserPassword(
    body: MyCustomerChangePassword,
    email: string,
    newPassword: string,
    setIsActualData: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> {
    await this.api.getApiRootToken().me().password().post({ body }).execute();
    // TODO Check this part
    this.logoutUser();
    await this.authenticateUser(email, newPassword);
    setIsActualData(false);
  }

  public async logoutUser(): Promise<TokenStore> {
    // this.api.getTokenCache().set({ token: '', expirationTime: 1, refreshToken: '' });
    const anonToken = await this.createAnonymousUser();
    await this.createCart();
    return anonToken;
  }

  public restoreUser(token: string, refreshToken: string, expirationTime = 7000): void {
    if (token && refreshToken) {
      this.api.setTokenCache({ token, refreshToken, expirationTime });
      // TODO  check if the token has expired (invalid). If true - create new one with the refresh Token
      // await this.api.getApiRootUserRefreshToken().
    }
  }
}

export const eCommerceAPI = new ECommerceAPI();
