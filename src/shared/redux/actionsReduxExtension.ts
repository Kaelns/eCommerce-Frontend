import { actionsEcommerceReduxExtension } from '@/services/ecommerce-api/rtk-query/actionsEcommerceReduxExtension';

export const actionsReduxExtension = {
  actionCreators: {
    ...actionsEcommerceReduxExtension
  }
};
