import { IBasketProducts } from '@/shared/types';

export enum BasketState {
  INCREMENT,
  DECREMENT,
  SET_QUANTITY,
  DELETE,
  SET_BASKET
}

interface IPayload {
  quantity: number;
  products: IBasketProducts;
}

export interface IBasketAction {
  type: BasketState;
  payload: { id: string; value?: IPayload[keyof IPayload] };
}
