import type { AppExtraArgument } from '@/shared/lib/redux/redux.types';
import type { FetchArgs, BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RTKQueryError } from '@/shared/api/ecommerce-api/model/types/RTKQueryError';

export type EcommerceExtendedQuery = BaseQueryFn<FetchArgs | string, unknown, RTKQueryError, Partial<AppExtraArgument>>;
export type EcommerceBaseQuery = BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError, Partial<AppExtraArgument>>;

// * Backend types

export interface ResponceOk {
  ok: boolean;
}

export interface BackendError {
  name: string;
  status: number;
  message: string;
}
