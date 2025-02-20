import { cartApi } from '@/entities/cart/api/cartApi';

export * from '@/entities/cart/model/types/cart.types';
export * from '@/entities/cart/model/types/cart.schemas';
export * from '@/entities/cart/model/data/cart.constants';

export { cartApi };
// export const { useCheckIsUserExistByEmailMutation } = cartApi;

export { MOCK_CART } from '@/entities/cart/model/data/cart.mocks';

export { calculatePrice } from '@/entities/cart/lib/helpers/numbers/calculatePrice';
export { calculateDiscountPercent } from '@/entities/cart/lib/helpers/numbers/calculateDiscountPercent';
export { calculateProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateProductsQuantity';
export { convertToLightCartAllProducts } from '@/entities/cart/lib/helpers/objects/convertToLightCartAllProducts';
