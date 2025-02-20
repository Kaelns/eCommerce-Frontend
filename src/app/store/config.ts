import { combineSlices } from '@reduxjs/toolkit';

import { router } from '@/router/router';

import { ecommerceApi } from '@/shared/api/ecommerce-api';
import { actionsEcommerceReduxExtension } from '@/shared/api/ecommerce-api/config/actionsEcommerceReduxExtension';

export interface LazyLoadedSlices {}

// * Used "slice.injectInto" for encapsulation
export const rootReducer = combineSlices(ecommerceApi).withLazyLoadedSlices<LazyLoadedSlices>();
export const middlewares = [ecommerceApi.middleware];
export const extraArgument = { router };

export const actionsReduxExtension = { actionCreators: { ...actionsEcommerceReduxExtension } };
