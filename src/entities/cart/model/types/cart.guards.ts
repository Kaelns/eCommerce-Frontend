import type { DiscountCodeReference } from '@commercetools/platform-sdk';

import { isObject, isString } from 'lodash';

export const isDiscountCodeReference = (value: unknown): value is DiscountCodeReference => {
  return isObject(value) && 'typeId' in value && value.typeId === 'discount-code' && 'id' in value && isString(value.id);
};
