import { ClientResponse, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';
import { apiClient } from '@/services/api/ApiClient';
import { IQueryProductsArgs } from '@/shared/types';

export async function getProducts(
  parameters: IQueryProductsArgs,
  amount?: number | 'all'
): Promise<ClientResponse<ProductProjectionPagedSearchResponse>> {
  const queryArgs: IQueryProductsArgs = parameters;
  if (!amount) {
    queryArgs.limit = LIMIT_ON_PAGE;
  } else if (amount !== 'all') {
    queryArgs.limit = amount;
  }
  return apiClient.getApiRoot().productProjections().search().get({ queryArgs }).execute();
}
