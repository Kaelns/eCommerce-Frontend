import { SerializedError } from '@reduxjs/toolkit';

import { RTKQueryError } from '@/services/ecommerce-api/rtk-query/types/RTKQueryError';

export function getErrorMessage(error: RTKQueryError | SerializedError | undefined): string {
  if (import.meta.env.PROD) {
    console.log(error);
  }

  if (!error) {
    return 'Something went wrong';
  } else if (!error?.message) {
    return 'Unknown error';
  } else if (error instanceof RTKQueryError) {
    return `${error.status} : ${error.message}`;
  } else {
    return error.message;
  }
}
