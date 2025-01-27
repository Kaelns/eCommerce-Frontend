import type { ProductProjection } from '@commercetools/platform-sdk';
import { convertToFilterParams } from '@/services/ecommerce/helpers/general/convertToFilterParams/convertToFilterParams';
import { api } from '@/services/api/Api';

export async function fetchCategoryProducts(categoryKey: string, number = 3): Promise<ProductProjection[]> {
  const response = await api.products.getProducts(convertToFilterParams({ categoryKey }), number);
  return response.body!.results;
}
