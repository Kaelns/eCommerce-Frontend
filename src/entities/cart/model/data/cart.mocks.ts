import type { Cart } from '@commercetools/platform-sdk';

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
