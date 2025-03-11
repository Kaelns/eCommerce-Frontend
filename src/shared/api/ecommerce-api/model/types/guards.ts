import type { BackendError } from '@/shared/api/ecommerce-api';

import { isObject } from '@/shared/model/types/guards';

// * Ecommmerce api guards

export const isBackendError = (obj: unknown): obj is BackendError => {
  return isObject(obj) && 'name' in obj && 'status' in obj && 'message' in obj;
};
