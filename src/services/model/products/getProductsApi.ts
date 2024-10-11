import type { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import { api } from '@/services/api/Api';
import type { IProductsResponce } from '@/services/interface';
import { convertToFilterParams } from '@/services/ecommerce/helpers/general/convertToFilterParams/convertToFilterParams';

export async function getProductsApi(parameters: IFilterState): Promise<IProductsResponce> {
  const response = await api.products.getProducts(convertToFilterParams(parameters));
  return { products: response.body.results, amount: response.body.total ? response.body.total : 0 };
}
