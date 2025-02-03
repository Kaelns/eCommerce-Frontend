import type { AppExtraArgument } from '@/shared/redux/redux';
import type { FetchArgs, BaseQueryApi } from '@reduxjs/toolkit/query';

import { baseQuery } from '@/services/ecommerce-api/rtk-query/config/baseQuery';

export async function restoreUserAndRequery(args: FetchArgs | string, queryApi: BaseQueryApi, extraOptions: Partial<AppExtraArgument>) {
  const resultRefresh = await baseQuery({ url: '/session', method: 'PATCH' }, queryApi, extraOptions);
  const isOk = resultRefresh.data && !resultRefresh.error;
  return isOk ? baseQuery(args, queryApi, extraOptions) : undefined;
}
