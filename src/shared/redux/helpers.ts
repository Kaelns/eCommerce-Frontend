import type { AppState } from '@/shared/redux/redux';

export const selectState = (state: AppState) => {
  return state;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectStateAny = (state: any) => {
  return state;
};
