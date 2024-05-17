import { ClientResponse } from '@commercetools/sdk-client-v2';
import { CustomerPagedQueryResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import ApiClient from '@/services/ApiRoot';

const apiRoot = new ApiClient().getApiRoot();

export const createCustomer = (email: string, password: string): Promise<ClientResponse<CustomerSignInResult>> =>
  apiRoot
    .customers()
    .post({
      body: {
        email,
        password
      }
    })
    .execute() as Promise<ClientResponse<CustomerSignInResult>>;

export const authenticateCustomer = (
  email: string,
  password: string
): Promise<ClientResponse<CustomerSignInResult>> => {
  const apiRootSec = new ApiClient(email, password).getApiRoot();
  return apiRootSec
    .me()
    .login()
    .post({
      body: {
        email,
        password
      }
    })
    .execute() as Promise<ClientResponse<CustomerSignInResult>>;
};

export const returnCustomerByEmail = (customerEmail: string): Promise<ClientResponse<CustomerPagedQueryResponse>> =>
  apiRoot
    .customers()
    .get({
      queryArgs: {
        where: `email="${customerEmail}"`
      }
    })
    .execute() as Promise<ClientResponse<CustomerPagedQueryResponse>>;
