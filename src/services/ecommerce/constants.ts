import type { Cart } from '@commercetools/platform-sdk';
import type { IProductsResponce } from '@/services/interface';
import type { ISrcsetPxAsc } from '@/shared/types';

export const COUNTRY = 'US';
export const LANGUAGE = 'en-US';
export const MONEY_SYMBOL = '$';
export const LIMIT_ON_PAGE = 18;
export const FRACTION_DIGITS = 2;
export const FRACTION_DOZENS = 10 ** FRACTION_DIGITS;

export const PROMOCODES = ['minus10', 'minus15'];

export const SRCSET_API: ISrcsetPxAsc = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '1024w'] // actual postfix = 700px, but there are no larger sizes except original
] as const;

export const EMPTY_DATA_PRODUCTS: IProductsResponce = { products: [], amount: 0 } as const;

export const MOCK_CART: Cart = {
  id: '',
  version: 1,
  createdAt: '',
  lastModifiedAt: '',
  lineItems: [],
  cartState: 'Active',
  totalPrice: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: 0,
    fractionDigits: 2
  },
  shippingMode: 'Single',
  shipping: [],
  customLineItems: [],
  discountCodes: [],
  directDiscounts: [],
  inventoryMode: 'None',
  taxMode: 'Platform',
  taxRoundingMode: 'HalfEven',
  taxCalculationMode: 'LineItemLevel',
  refusedGifts: [],
  origin: 'Customer',
  itemShippingAddresses: []
} as const;
