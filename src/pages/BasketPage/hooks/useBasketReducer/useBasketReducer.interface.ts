import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export enum BasketState {
  INCREMENT,
  DECREMENT,
  DELETE,
  SET_BASKET
}

interface IPayload {
  key: string;
  products: IBasketProducts;
}

export interface IBasketAction {
  type: BasketState;
  payload: IPayload[keyof IPayload];
}
