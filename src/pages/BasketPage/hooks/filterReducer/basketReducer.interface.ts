import { BasketState } from '@/pages/BasketPage/hooks/filterReducer/basketReducer.enum';

export interface IBasketState {
  [key: string]: number;
}

interface IPayload {
  key: string;
  amount: number;
}

export interface IBasketAction {
  type: BasketState;
  payload: IPayload;
}
