import type { SerializedError } from 'vitest';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { BackendError } from '@/shared/api/ecommerce-api/model/types/types';

import { isObject } from '@/shared/model/types/guards';

// * RTK query guards
export const isSerializedError = (obj: unknown): obj is SerializedError => {
  return isObject(obj) && 'name' in obj && 'message' in obj && 'stack' in obj;
};

export const isFetchBaseQueryError = (obj: unknown): obj is FetchBaseQueryError => {
  return isObject(obj) && 'status' in obj && 'data' in obj;
};

// * Ecommmerce api guards

export const isBackendError = (obj: unknown): obj is BackendError => {
  return isObject(obj) && 'name' in obj && 'status' in obj && 'message' in obj;
};
