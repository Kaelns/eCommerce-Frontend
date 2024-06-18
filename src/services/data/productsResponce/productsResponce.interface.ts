import { ProductProjection } from '@commercetools/platform-sdk';

export interface IProductsResponce {
  products: ProductProjection[];
  amount: number;
}
