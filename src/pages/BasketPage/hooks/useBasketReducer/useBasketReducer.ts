import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export const basketReducer = (state: IBasketProducts, action: IBasketAction): IBasketProducts => {
  // todo:
  switch (action.type) {
    case BasketState.INCREMENT: {
      const key = action.payload as string;
      // manageCart(ManageCart.ADD, id);
      return {
        ...state,
        [key]: { ...state[key], quantity: state[key].quantity + 1 }
      };
    }
    case BasketState.DECREMENT: {
      const key = action.payload as string;
      if (state[key].quantity > 1) {
        // manageCart(ManageCart.REMOVE, lineId);
        return {
          ...state,
          [key]: { ...state[key], price: state[key].quantity - 1 }
        };
      }
      break;
    }
    case BasketState.DELETE: {
      const key = action.payload as string;
      // manageCart(ManageCart.DELETE, lineId);
      const { [key]: deleteObj, ...rest } = state;
      return rest;
    }
    case BasketState.SET_BASKET: {
      return action.payload as IBasketProducts;
    }
    default:
  }

  return state;
};
