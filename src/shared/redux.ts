import type { extraArgument, store } from '@/app/store';
import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { combineSlices } from '@reduxjs/toolkit';
import { ecommerceApiSlice } from '@/services/ecommerceApi';
import { useDispatch, useSelector } from 'react-redux';

export const rootReducer = combineSlices(ecommerceApiSlice);
export const middlewares = [ecommerceApiSlice.middleware];

// * To create encapsulation. We forget about the general store and get the elements through selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IAppState = any;
export type IAppDispatch = typeof store.dispatch;
export type IAppThunk<T = void> = ThunkAction<T, IAppState, typeof extraArgument, UnknownAction>;

export const useAppStore = useSelector.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
