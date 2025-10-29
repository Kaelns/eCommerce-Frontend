import type { SerializedError } from '@reduxjs/toolkit';

import { RTKQueryError } from '@/shared/api/ecommerce-api/model/types/RTKQueryError';

export function getErrorMessage(error: RTKQueryError | SerializedError | undefined): string {
  if (import.meta.env.PROD) {
    console.log(error);
  }

  if (!error) {
    return '';
  } else if (!error?.message) {
    return 'Unknown error';
  } else if (error instanceof RTKQueryError) {
    return `${error.status} : ${error.message}`;
  } else {
    return error.message;
  }
}
