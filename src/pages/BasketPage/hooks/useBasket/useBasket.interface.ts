import { IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export interface IUseBasketReturn {
  isLoading: boolean;
  error: string;
  prodAmount: number;
  basketProducts: IBasketProducts;
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
  finalPrice: number;
}
