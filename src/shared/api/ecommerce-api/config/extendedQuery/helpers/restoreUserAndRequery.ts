import type { FetchArgs, BaseQueryApi } from '@reduxjs/toolkit/query';
import type { AppExtraArgument } from '@/shared/lib/redux/redux.types';

import { baseQuery } from '@/shared/api/ecommerce-api/config/baseQuery';

export async function restoreUserAndRequery(args: FetchArgs | string, queryApi: BaseQueryApi, extraOptions: Partial<AppExtraArgument>) {
  const resultRefresh = await baseQuery({ url: '/session', method: 'PATCH' }, queryApi, extraOptions);
  const isOk = resultRefresh.data && !resultRefresh.error;
  return isOk ? baseQuery(args, queryApi, extraOptions) : undefined;
}
