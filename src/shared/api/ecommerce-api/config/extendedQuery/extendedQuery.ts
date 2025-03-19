import type { EcommerceExtendedQuery } from '@/shared/api/ecommerce-api';

import { baseQuery } from '@/shared/api/ecommerce-api/config/baseQuery';
import { serializeError } from '@/shared/api/ecommerce-api/lib/helpers/serializeError';
import { restoreUserAndRequery } from '@/shared/api/ecommerce-api/config/extendedQuery/helpers/restoreUserAndRequery';
import { setIsLoggedAfterQuery } from '@/shared/api/ecommerce-api/config/extendedQuery/helpers/setIsLoggedAfterQuery';

import { HttpStatus, AlertAPIText, AlertSeverity } from '@/shared/model/data';

// TODO Check functionality

/**
 * baseQueryExtended dispatch doesn't uses actions from slices to avoid errors with circular dependencies like:
 * "Can't use rootReducer before initialization"
 */
export const extendedQuery: EcommerceExtendedQuery = async (args, queryApi, extraOptions) => {
  let result = await baseQuery(args, queryApi, extraOptions);

  switch (result?.error?.status) {
    case HttpStatus.FORBIDDEN:
      queryApi.dispatch({
        type: 'alert/showAlertAction',
        payload: { message: AlertAPIText.USER_FORBIDDEN_ERROR, severity: AlertSeverity.ERROR }
      });
      break;
    case HttpStatus.INTERNAL_SERVER_ERROR:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertAPIText.SERVER_ERROR, severity: AlertSeverity.ERROR } });
      break;
    case HttpStatus.UNAUTHORIZED: {
      const newResult = await restoreUserAndRequery(args, queryApi, extraOptions);
      if (newResult && !newResult.error) {
        result = newResult;
      } else {
        queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged: false } });
        queryApi.dispatch({
          type: 'alert/showAlertAction',
          payload: { message: AlertAPIText.USER_UNAUTHORIZED_ERROR, severity: AlertSeverity.ERROR }
        });
      }
      break;
    }
    default:
  }

  setIsLoggedAfterQuery(queryApi);

  if (import.meta.env.PROD) {
    console.log('Responce ', '\n', result.data);
  }

  return result.error ? { ...result, error: serializeError(result?.error) } : result;
};
