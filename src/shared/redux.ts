import type { extraArgument, store } from '@/app';
import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { combineSlices } from '@reduxjs/toolkit';
import { ecommerceApiSlice } from '@/services/ecommerceApi';
import { useDispatch, useSelector } from 'react-redux';

export interface ILazyLoadedSlices {}

console.log('Init');

// * Used slice.injectInto for encapsulation
export const rootReducer = combineSlices(ecommerceApiSlice).withLazyLoadedSlices<ILazyLoadedSlices>();
export const middlewares = [ecommerceApiSlice.middleware];

export type IAppStore = typeof store;
export type IAppState = ReturnType<IAppStore['getState']>;
export type IAppDispatch = IAppStore['dispatch'];
export type IAppExtraArgument = typeof extraArgument;
export type IAppThunk<T = void> = ThunkAction<T, IAppStore, IAppExtraArgument, UnknownAction>;

export const useAppStore = useSelector.withTypes<IAppStore>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
