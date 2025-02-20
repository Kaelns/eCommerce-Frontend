import { cartSlice } from '@/pages/CartPage/model/cart.slice';

export { CartPage } from '@/pages/CartPage/CartPage';

export const { selectCartProductId } = cartSlice.selectors;
