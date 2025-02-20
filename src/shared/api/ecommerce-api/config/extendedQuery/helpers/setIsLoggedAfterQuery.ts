import type { BaseQueryApi } from '@reduxjs/toolkit/query';

import { Cookies } from '@/shared/model/data/enums';
import { getCookieByName } from '@/shared/lib/helpers/side-effects/getCookieByName';

export function setIsLoggedAfterQuery(queryApi: BaseQueryApi) {
  const isLogged = getCookieByName(Cookies.USER_IS_LOGGED) === 'true';
  queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged } });
}
