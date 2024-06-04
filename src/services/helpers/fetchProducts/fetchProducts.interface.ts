import { ProductProjection } from '@commercetools/platform-sdk';

export interface IFetchProductsReturn {
  products: ProductProjection[];
  amount?: number;
}
