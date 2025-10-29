import type { store, extraArgument } from '@/app/store/store';
import type { ThunkAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppExtraArgument = typeof extraArgument;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunkDispatch = ThunkDispatch<AppState, AppExtraArgument, UnknownAction>;
export type AppThunk<T = void> = ThunkAction<T, AppState, AppExtraArgument, UnknownAction>;

//  * Used "any" for encapsulation to prevent getting the date without slice selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppStoreAny = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppQueryStateAny = Record<string, any>;
