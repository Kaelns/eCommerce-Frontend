import type { AppState, AppStoreAny, AppDispatch } from '@/shared/lib/redux/redux.types';

import { useDispatch, useSelector } from 'react-redux';

export const useAppStore = useSelector.withTypes<AppStoreAny>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
