import { router } from '@/router/router';

import { ecommerceApi , actionsEcommerceReduxExtension } from '@/shared/api/ecommerce-api';

export const middlewares = [ecommerceApi.middleware];
export const extraArgument = { router };

export const actionsReduxExtension = { actionCreators: { ...actionsEcommerceReduxExtension } };
