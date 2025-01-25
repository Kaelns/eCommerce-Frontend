import type { extraArgument, store } from '@/app';
import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { combineSlices } from '@reduxjs/toolkit';
import { ecommerceApiSlice } from '@/services/ecommerce-api';
import { useDispatch, useSelector } from 'react-redux';

export interface ILazyLoadedSlices {}

// * Used "slice.injectInto" for encapsulation
export const rootReducer = combineSlices(ecommerceApiSlice).withLazyLoadedSlices<ILazyLoadedSlices>();
export const middlewares = [ecommerceApiSlice.middleware];

//  * Used "any" for encapsulation to prevent getting the date without slice selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IAppStoreAny = any;

export type IAppStore = typeof store;
export type IAppState = ReturnType<IAppStore['getState']>;
export type IAppDispatch = IAppStore['dispatch'];
export type IAppExtraArgument = typeof extraArgument;
export type IAppThunk<T = void> = ThunkAction<T, IAppState, IAppExtraArgument, UnknownAction>;

export const useAppStore = useSelector.withTypes<IAppStoreAny>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
