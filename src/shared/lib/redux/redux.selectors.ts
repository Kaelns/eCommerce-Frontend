import type { AppState } from '@/shared/lib/redux/redux.types';

export const selectState = (state: AppState) => {
  return state;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectStateAny = (state: any) => {
  return state;
};
