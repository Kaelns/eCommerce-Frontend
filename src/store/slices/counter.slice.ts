import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreAction } from '@/store/store.interface';

export const INIT_STORE = {
  number: 0
};

export const incrementAction = createAction(StoreAction.COUNTER_INCREMENT);
export const decrementAction = createAction(StoreAction.COUNTER_DECREMENT);

export const counterReducer = createReducer(INIT_STORE, (builder) => {
  builder.addCase(incrementAction, (state) => {
    state.number += 1;
  });
  builder.addCase(decrementAction, (state) => {
    state.number -= 1;
  });
});
