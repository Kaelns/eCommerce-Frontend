import { BasketState } from '@/pages/BasketPage/hooks/filterReducer/basketReducer.enum';
import { IBasketAction, IBasketState } from '@/pages/BasketPage/hooks/filterReducer/basketReducer.interface';

export const basketReducer = (state: IBasketState, action: IBasketAction): IBasketState => {
  const { key, amount } = action.payload;

  switch (action.type) {
    case BasketState.PRICE:
      return {
        ...state,
        [key]: amount as number
      };
    default:
  }
  return state;
};
