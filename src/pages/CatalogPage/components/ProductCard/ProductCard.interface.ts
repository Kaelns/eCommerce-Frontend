import { ProductProjection } from '@commercetools/platform-sdk';
import { IBasketResponce } from '@/services/helpers/fetchBasket/fetchBasket.interface';

export interface IProductCardProps {
  className?: string;
  cartData?: IBasketResponce;
  product: ProductProjection;
}
