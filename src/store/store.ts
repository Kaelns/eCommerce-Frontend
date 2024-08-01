import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { IAppDispatch, IAppState } from '@/store/store.interface';
import { assetsReducer } from '@/store/reducers/assetsReducer';
import { counterReducer } from '@/store/reducers/counterReducer';

const rootReducer = combineReducers({
  assets: assetsReducer,
  counter: counterReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export const useAppSelector = useSelector.withTypes<IAppState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
