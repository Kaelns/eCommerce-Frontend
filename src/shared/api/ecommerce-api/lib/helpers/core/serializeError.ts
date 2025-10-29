import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { isBackendError } from '@/shared/api/ecommerce-api/model/types/guards';
import { RTKQueryError } from '@/shared/api/ecommerce-api/model/types/RTKQueryError';

export function serializeError(error: FetchBaseQueryError | undefined) {
  if (!error) {
    return;
  }

  if ('data' in error && isBackendError(error.data)) {
    const { name, status, message } = error.data;
    return new RTKQueryError(message, status, name);
  }

  const { status } = error;
  const message = 'error' in error ? error.error : 'Unknown error';
  return new RTKQueryError(message, status);
}
