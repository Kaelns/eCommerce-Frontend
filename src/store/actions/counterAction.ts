import { StoreAction } from '@/store/store.interface';

export function counterIncrement() {
  return {
    type: StoreAction.COUNTER_INCREMENT
  };
}

export function counterDecrement() {
  return {
    type: StoreAction.COUNTER_DECREMENT
  };
}

export type IIncrementAction = ReturnType<typeof counterIncrement>;
export type IDecrementAction = ReturnType<typeof counterDecrement>;
export type ICounterAction = IIncrementAction | IDecrementAction;
