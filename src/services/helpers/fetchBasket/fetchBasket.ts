import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IProductsResponce } from '@/services/data/productsResponce/productsResponce.interface';

export async function fetchBasket(): Promise<IProductsResponce> {
  const response = await eCommerceAPI.getProductsBasket();
  return { products: response.body!.results, amount: response.body!.total ? response.body!.total : 0 };
}
