import { ProductProjection } from '@commercetools/platform-sdk';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export async function fetchProducts(): Promise<ProductProjection[]> {
  try {
    const response = await eCommerceAPI.getProductsAll();
    return response.body!.results;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
  return [];
}
