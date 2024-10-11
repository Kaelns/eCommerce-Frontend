import type { ProductProjection } from '@commercetools/platform-sdk';
import { api } from '@/services/api/Api';

export async function getProductByKeyApi(key: string): Promise<ProductProjection> {
  const response = await api.products.getProductByKey(key);
  return response.body;
}
