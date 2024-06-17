import { BasketState } from '@/pages/BasketPage/components/hooks/useBasketReducer/useBasketReducer.enum';
import { IBasketAction } from '@/pages/BasketPage/components/hooks/useBasketReducer/useBasketReducer.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';
// import { manageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart';
// import { ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';

export const basketReducer = (state: IBasketProducts, action: IBasketAction): IBasketProducts => {
  const { key, id, lineId } = action.payload;
  const { quantity } = state[key];
  // todo:
  switch (action.type) {
    case BasketState.INCREMENT:
      // manageCart(ManageCart.ADD, id);
      return {
        ...state,
        [key]: { ...state[key], quantity: quantity + 1 }
      };
    case BasketState.DECREMENT:
      if (quantity > 1) {
        // manageCart(ManageCart.REMOVE, lineId);
        return {
          ...state,
          [key]: { ...state[key], price: quantity - 1 }
        };
      }
      break;
    case BasketState.DELETE: {
      // manageCart(ManageCart.DELETE, lineId);
      const { [key]: deleteObj, ...rest } = state;
      return rest;
    }
    default:
  }

  return state;
};
