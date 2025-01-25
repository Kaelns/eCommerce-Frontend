import { Cookies } from '@/shared/data/constants';
import { getCookieByName } from '@/utils/get/getCookieByName';
import type { BaseQueryApi } from '@reduxjs/toolkit/query';

export function setIsLoggedAfterQuery(queryApi: BaseQueryApi) {
  const isLogged = getCookieByName(Cookies.USER_IS_LOGGED) === 'true';
  queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged } });
}
