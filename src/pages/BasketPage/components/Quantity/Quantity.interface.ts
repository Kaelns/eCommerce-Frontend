import { IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';

export interface IQuantityProps {
  id: string;
  quantity: number;
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
  inputStyles?: string;
  containerStyles?: string;
}
