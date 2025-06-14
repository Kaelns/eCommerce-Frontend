import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/shared/lib/redux';

const INIT_SLIDER = {
  initSlide: {} as Record<string, number>
};

const sliderLazy = createSlice({
  name: 'slider',
  initialState: INIT_SLIDER,
  selectors: {
    selectInitSlide: (state, sliderId: string) => state.initSlide[sliderId] ?? 0
  },
  reducers: {
    setInitSlideAction(state, action: PayloadAction<{ slide: number; sliderId: string; }>) {
      state.initSlide[action.payload.sliderId] = action.payload.slide;
    }
  }
});

const slider = sliderLazy.injectInto(rootReducer);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof sliderLazy> {}
}

export const { selectInitSlide } = slider.selectors;
export const { setInitSlideAction } = slider.actions;
