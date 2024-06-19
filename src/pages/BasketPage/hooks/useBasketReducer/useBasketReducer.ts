import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';
import { checkIsObject } from '@/utils/checkObject';

export const basketReducer = (state: IBasketProducts, action: IBasketAction): IBasketProducts => {
  const { id, value } = action.payload;
  const { maxQuantity, quantity } = state[id] ?? { maxQuantity: 0, quantity: 0 };

  switch (action.type) {
    case BasketState.INCREMENT: {
      if (quantity < maxQuantity) {
        return {
          ...state,
          [id]: { ...state[id], quantity: quantity + 1 }
        };
      }
      break;
    }
    case BasketState.DECREMENT: {
      if (quantity > 1) {
        return {
          ...state,
          [id]: { ...state[id], quantity: quantity - 1 }
        };
      }
      break;
    }
    case BasketState.SET_QUANTITY: {
      if (typeof value === 'number' && value > 1 && value + quantity <= maxQuantity) {
        return {
          ...state,
          [id]: { ...state[id], quantity: value }
        };
      }
      break;
    }
    case BasketState.DELETE: {
      const { [id]: deleteObj, ...rest } = state;
      return rest;
    }
    case BasketState.SET_BASKET: {
      if (checkIsObject(value)) {
        return value;
      }
      break;
    }
    default:
  }

  return state;
};
