import { store } from '@/store/store';

export enum StoreAction {
  COUNTER_INCREMENT = 'COUNTER_INCREMENT',
  COUNTER_DECREMENT = 'DECREMENT',
  ASSETS_SHOW_MODAL = 'ASSETS_SHOW_MODAL',
  ASSETS_HIDE_MODAL = 'ASSETS_HIDE_MODAL'
}

export type IAppState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
