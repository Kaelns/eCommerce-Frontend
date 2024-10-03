import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IProductsResponce } from '@/services/data/productsResponce/productsResponce.interface';
import { convertToFilterParams } from '@/services/helpers/convertToFilterParams/convertToFilterParams';

export async function getProductsApi(parameters: IFilterState): Promise<IProductsResponce> {
  const response = await eCommerceAPI.getProductsAll(convertToFilterParams(parameters));
  return { products: response.body!.results, amount: response.body!.total ? response.body!.total : 0 };
}
