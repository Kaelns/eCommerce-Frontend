import { cartSlice } from '@/entities/cart/model/cart.slice';

export { CartPage } from '@/pages/CartPage/CartPage';

export const { selectCartProductLineId: selectCartProductId } = cartSlice.selectors;
