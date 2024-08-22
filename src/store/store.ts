import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { IAppDispatch, IAppState } from '@/store/store.interface';
import { counterReducer } from '@/store/counter/counter.slice';
import { alertSlice } from '@/features/AlertText/alert.slice';

export const store = configureStore({
  reducer: {
    [alertSlice.name]: alertSlice.reducer,
    counter: counterReducer
  }
});

export const useAppStore = useSelector.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
