import { IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export interface IUseBasketReturn {
  isLoading: boolean;
  error: string;
  discount: number;
  prodAmount: number;
  finalPrice: number;
  isDiscounted: boolean;
  handleDelete: () => void;
  handlePromocode: (isSet: boolean) => void;
  basketProducts: IBasketProducts;
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
}

export interface IBasketState {
  isPromocode: boolean;
  isDelete: boolean;
}
