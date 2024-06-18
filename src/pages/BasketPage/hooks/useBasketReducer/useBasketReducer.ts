import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export const basketReducer = (state: IBasketProducts, action: IBasketAction): IBasketProducts => {
  switch (action.type) {
    case BasketState.INCREMENT: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], quantity: state[id].quantity + 1 }
      };
    }
    case BasketState.DECREMENT: {
      const { id } = action.payload;
      if (state[id].quantity > 1) {
        return {
          ...state,
          [id]: { ...state[id], quantity: state[id].quantity - 1 }
        };
      }
      break;
    }
    case BasketState.SET_QUANTITY: {
      const { id, value } = action.payload;
      if (typeof value === 'number' && value > 1) {
        return {
          ...state,
          [id]: { ...state[id], quantity: value }
        };
      }
      break;
    }
    case BasketState.DELETE: {
      const { id } = action.payload;
      const { [id]: deleteObj, ...rest } = state;
      return rest;
    }
    case BasketState.SET_BASKET: {
      return action.payload.value as IBasketProducts;
    }
    default:
  }

  return state;
};
