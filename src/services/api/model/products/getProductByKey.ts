import { ClientResponse, ProductProjection } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function getProductByKey(key: string): Promise<ClientResponse<ProductProjection>> {
  return apiClient.getApiRoot().productProjections().withKey({ key }).get().execute();
}
