import { ICounterAction } from '@/store/actions/counterAction';
import { StoreAction } from '@/store/store.interface';

export const INIT_STORE = {
  number: 0
};

export const counterReducer = (prevState: typeof INIT_STORE | undefined, action: ICounterAction): typeof INIT_STORE => {
  const state = prevState ?? INIT_STORE;

  switch (action.type) {
    case StoreAction.COUNTER_INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case StoreAction.COUNTER_DECREMENT: {
      if (state.number > 1) {
        return {
          ...state,
          number: state.number - 1
        };
      }
      break;
    }
    default:
  }

  return state;
};
