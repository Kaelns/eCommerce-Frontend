import { ThunkAction, UnknownAction, combineSlices, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { alertSlice } from '@/features/AlertText/alert.slice';
import { router } from '@/router';
import { authSlice } from '@/store/slices/auth.slice';
import { counterReducer } from '@/store/slices/counter.slice';

const extraArgument = {
  router
};

export const store = configureStore({
  reducer: combineSlices(alertSlice, authSlice, {
    counter: counterReducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } })
});

export type IAppState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export type IAppThunk<T = void> = ThunkAction<T, IAppState, void, UnknownAction>;

export const useAppStore = useSelector.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
