import type { BaseQueryApi } from '@reduxjs/toolkit/query';

import { getCookieByName } from '@/shared/lib/helpers';
import { Cookies } from '@/shared/model/data';

export function setIsLoggedAfterQuery(queryApi: BaseQueryApi) {
  const isLogged = getCookieByName(Cookies.USER_IS_LOGGED) === 'true';
  queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged } });
}
