import { IBasketAction } from '@/pages/BasketPage/components/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export interface IUseBasketReturn {
  isLoading: boolean;
  error: string;
  amount: number;
  basketProducts: IBasketProducts;
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
  finalPrice: number;
  setFinalPrice: React.Dispatch<React.SetStateAction<number>>;
}
