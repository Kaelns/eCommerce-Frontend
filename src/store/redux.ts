import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import type { extraArgument, store } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

export type IAppState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export type IAppThunk<T = void> = ThunkAction<T, IAppState, typeof extraArgument, UnknownAction>;

export const useAppStore = useSelector.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
