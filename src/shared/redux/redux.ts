import type { store, extraArgument } from '@/app';
import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';

import { combineSlices } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { ecommerceApi } from '@/services/ecommerce-api/rtk-query';

export interface LazyLoadedSlices {}

// * Used "slice.injectInto" for encapsulation
export const rootReducer = combineSlices(ecommerceApi).withLazyLoadedSlices<LazyLoadedSlices>();
export const middlewares = [ecommerceApi.middleware];

//  * Used "any" for encapsulation to prevent getting the date without slice selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppStoreAny = any;

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppExtraArgument = typeof extraArgument;
export type AppThunk<T = void> = ThunkAction<T, AppState, AppExtraArgument, UnknownAction>;

export const useAppStore = useSelector.withTypes<AppStoreAny>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
