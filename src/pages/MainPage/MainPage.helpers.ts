import { ProductProjection } from '@commercetools/platform-sdk';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { convertToFilterParams } from '@/services/helpers/convertToFilterParams/convertToFilterParams';

export async function fetchCategoryProducts(categoryKey: string, number = 3): Promise<ProductProjection[]> {
  const response = await eCommerceAPI.getProductsAll(convertToFilterParams({ categoryKey }), number);
  return response.body!.results;
}
