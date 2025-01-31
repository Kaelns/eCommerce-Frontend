import type { AppExtraArgument } from '@/shared/redux/redux';
import type { FetchArgs, BaseQueryApi } from '@reduxjs/toolkit/query';
import type { ResponceOk } from '@/services/ecommerce-api/rtk-query/types/types';

import { baseQuery } from '@/services/ecommerce-api/rtk-query/config/baseQuery';

import { responceNotOk } from '@/shared/data/constants';

export async function restoreUserAndRequery(args: FetchArgs | string, queryApi: BaseQueryApi, extraOptions: Partial<AppExtraArgument>) {
  const resultRefresh = await baseQuery({ url: '/session', method: 'PATCH' }, queryApi, extraOptions);
  const responceOk = resultRefresh.data && !resultRefresh.error ? (resultRefresh.data as ResponceOk) : responceNotOk;
  return responceOk.ok ? baseQuery(args, queryApi, extraOptions) : undefined;
}
