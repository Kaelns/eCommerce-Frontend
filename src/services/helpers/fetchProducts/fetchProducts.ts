import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IFetchProductsReturn } from '@/services/helpers/fetchProducts/fetchProducts.interface';

export async function fetchProducts(): Promise<IFetchProductsReturn> {
  try {
    const response = await eCommerceAPI.getProductsAll();
    return { products: response.body!.results, amount: response.body!.total ? response.body!.total : 0 };
  } catch (error) {
    console.error('Error fetching products:', error);
  }
  return { products: [], amount: 0 };
}
