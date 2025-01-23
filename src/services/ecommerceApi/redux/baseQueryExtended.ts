import type { IAppExtraArgument } from '@/shared/redux';
import type { BackendError, ResponceOk } from '@/shared/types/types';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getCookieByName } from '@/utils/get/getCookieByName';
import { AlertsAPIText, Cookies, Severity } from '@/shared/data/constants';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include'
});

// TODO Check functionality
export const baseQueryExtended: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError | BackendError, Partial<IAppExtraArgument>> = async (
  args,
  queryApi,
  extraOptions
) => {
  let result = await baseQuery(args, queryApi, extraOptions);

  switch (result?.error?.status) {
    case 401: {
      const resultRefresh = await baseQuery({ url: '/session', method: 'PATCH' }, queryApi, extraOptions);
      const responceOk = resultRefresh.data as ResponceOk;
      if (responceOk?.ok) {
        result = await baseQuery(args, queryApi, extraOptions);
      } else {
        queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged: false } });
        queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertsAPIText.USER_UNAUTHORIZED_ERROR, severity: Severity.ERROR } });
      }
      break;
    }
    case 403:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertsAPIText.USER_FORBIDDEN_ERROR, severity: Severity.ERROR } });
      break;
    case 500:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertsAPIText.SERVER_ERROR, severity: Severity.ERROR } });
      break;
    default: {
      const isLogged = getCookieByName(Cookies.USER_IS_LOGGED) === 'true';
      queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged } });
    }
  }
  return result;
};
