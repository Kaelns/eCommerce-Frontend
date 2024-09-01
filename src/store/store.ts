import { ThunkAction, UnknownAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { counterReducer } from '@/store/counter/counter.slice';
import { alertSlice } from '@/features/AlertText/alert.slice';

export const store = configureStore({
  reducer: {
    [alertSlice.name]: alertSlice.reducer,
    counter: counterReducer
  }
});

export type IAppState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export type IAppThunk<T = void> = ThunkAction<T, IAppState, void, UnknownAction>;

export const useAppStore = useSelector.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
