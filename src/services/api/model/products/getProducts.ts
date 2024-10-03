import { ClientResponse, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';
import { apiClient } from '@/services/api/ApiClient';
import { IConvertToFilterParamsReturn } from '@/services/helpers/convertToFilterParams/convertToFilterParams.interface';

export async function getProducts(
  parameters: IConvertToFilterParamsReturn,
  amount = LIMIT_ON_PAGE
): Promise<ClientResponse<ProductProjectionPagedSearchResponse>> {
  return apiClient
    .getApiRoot()
    .productProjections()
    .search()
    .get({ queryArgs: { limit: amount, ...parameters } })
    .execute();
}
