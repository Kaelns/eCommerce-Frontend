import { api } from '@/services/api/Api';
import type { IProductsResponce } from '@/services/interface';

export async function getProductsAllApi(): Promise<IProductsResponce> {
  const response = await api.products.getProductsAll();
  return { products: response.body.results, amount: response.body.total ? response.body.total : 0 };
}
