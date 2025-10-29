import { combineSlices, createDynamicMiddleware } from '@reduxjs/toolkit';

export interface LazyLoadedSlices {}

export const dynamicMiddleware = createDynamicMiddleware();
export const rootReducer = combineSlices().withLazyLoadedSlices<LazyLoadedSlices>();
