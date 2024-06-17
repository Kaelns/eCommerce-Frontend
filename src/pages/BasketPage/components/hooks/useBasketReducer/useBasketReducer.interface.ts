import { BasketState } from '@/pages/BasketPage/components/hooks/useBasketReducer/useBasketReducer.enum';

interface IPayload {
  key: string;
  id: string;
  lineId: string;
}

export interface IBasketAction {
  type: BasketState;
  payload: IPayload;
}
