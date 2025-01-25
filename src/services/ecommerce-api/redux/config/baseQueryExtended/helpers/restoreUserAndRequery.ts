import { responceNotOk } from '@/shared/data/constants';
import type { ResponceOk } from '@/shared/types/types';
import type { IAppExtraArgument } from '@/shared/redux';
import type { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query';
import { baseQuery } from '@/services/ecommerce-api/redux/config/baseQuery';

export async function restoreUserAndRequery(args: string | FetchArgs, queryApi: BaseQueryApi, extraOptions: Partial<IAppExtraArgument>) {
  const resultRefresh = await baseQuery({ url: '/session', method: 'PATCH' }, queryApi, extraOptions);
  const responceOk = resultRefresh.data && !resultRefresh.error ? (resultRefresh.data as ResponceOk) : responceNotOk;
  return responceOk.ok ? baseQuery(args, queryApi, extraOptions) : undefined;
}
