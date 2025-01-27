import type { EcommerceBaseQuery } from '@/shared/types/types';
import { baseQuery } from '@/services/ecommerce-api/redux/config/baseQuery';
import { HttpStatus, AlertAPIText, AlertSeverity } from '@/shared/data/enums';
import { restoreUserAndRequery } from '@/services/ecommerce-api/redux/config/baseQueryExtended/helpers/restoreUserAndRequery';
import { setIsLoggedAfterQuery } from '@/services/ecommerce-api/redux/config/baseQueryExtended/helpers/setIsLoggedAfterQuery';

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
        queryApi.dispatch({
          type: 'alert/showAlertAction',
          payload: { message: AlertAPIText.USER_UNAUTHORIZED_ERROR, severity: AlertSeverity.ERROR }
        });
      }
      break;
    }
    case HttpStatus.FORBIDDEN:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertAPIText.USER_FORBIDDEN_ERROR, severity: AlertSeverity.ERROR } });
      break;
    case HttpStatus.SERVER_ERROR:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertAPIText.SERVER_ERROR, severity: AlertSeverity.ERROR } });
      break;
    default: {
      setIsLoggedAfterQuery(queryApi);
    }
  }

  return result;
};
