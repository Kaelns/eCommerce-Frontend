import { cartSlice } from '@/pages/BasketPage/cart.slice';
import { alertSlice } from '@/features/components/AlertText/alert.slice';
import { combineSlices } from '@reduxjs/toolkit';
import { cartProductsSlice } from '@/pages/BasketPage/cartProducts.slice';
import * as slices from '@/store/slices';

export const rootReducer = combineSlices(alertSlice, cartSlice, cartProductsSlice, ...Object.values(slices));
