import type { EcommerceBaseQuery } from '@/shared/types/types';
import { AlertsAPIText, HttpStatus, Severity } from '@/shared/data/constants';
import { restoreUserAndRequery } from '@/services/ecommerce-api/redux/config/baseQueryExtended/helpers/restoreUserAndRequery';
import { setIsLoggedAfterQuery } from '@/services/ecommerce-api/redux/config/baseQueryExtended/helpers/setIsLoggedAfterQuery';
import { baseQuery } from '@/services/ecommerce-api/redux/config/baseQuery';

// TODO Check functionality

/**
 * baseQueryExtended dispatch doesn't uses actions from slices to avoid errors with circular dependencies like:
 * "Can't use rootReducer before initialization"
 */
export const baseQueryExtended: EcommerceBaseQuery = async (args, queryApi, extraOptions) => {
  let result = await baseQuery(args, queryApi, extraOptions);

  switch (result?.error?.status) {
    case HttpStatus.UNAUTHORIZED: {
      const newResult = await restoreUserAndRequery(args, queryApi, extraOptions);
      if (newResult && !newResult.error) {
        result = newResult;
      } else {
        queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged: false } });
        queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertsAPIText.USER_UNAUTHORIZED_ERROR, severity: Severity.ERROR } });
      }
      break;
    }
    case HttpStatus.FORBIDDEN:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertsAPIText.USER_FORBIDDEN_ERROR, severity: Severity.ERROR } });
      break;
    case HttpStatus.SERVER_ERROR:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertsAPIText.SERVER_ERROR, severity: Severity.ERROR } });
      break;
    default: {
      setIsLoggedAfterQuery(queryApi);
    }
  }

  return result;
};
