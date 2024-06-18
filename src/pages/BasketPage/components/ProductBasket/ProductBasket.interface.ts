import { IBasketProductReturn } from '@/pages/BasketPage/hooks/useBasketProducts/useBasketProducts.interface';
import { IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';

export interface IProductBasketProps {
  className?: string;
  productData: IBasketProductReturn;
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
}
