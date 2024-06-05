import { ProductProjection } from '@commercetools/platform-sdk';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export async function fetchProduct(key: string): Promise<ProductProjection> {
  const response = await eCommerceAPI.getProduct(key);
  return response.body;
}
