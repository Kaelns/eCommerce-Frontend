import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { convertToFilterParams } from '@/services/helpers/convertToFilterParams/convertToFilterParams';
import { IFetchProductsReturn } from '@/services/helpers/fetchProducts/fetchProducts.interface';

export async function fetchProducts(parameters: IFilterState): Promise<IFetchProductsReturn> {
  const response = await eCommerceAPI.getProductsAll(convertToFilterParams(parameters));
  return { products: response.body!.results, amount: response.body!.total ? response.body!.total : 0 };
}
