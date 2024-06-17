import { IBasketResponce } from '@/services/helpers/fetchBasket/fetchBasket.interface';

export const checkIsInCart = (cartData: IBasketResponce, id: string): string => {
  if (!cartData.amount) {
    return '';
  }
  const cartItem = cartData.basket.find((product) => product.productId === id);
  return cartItem ? cartItem.id : '';
};
