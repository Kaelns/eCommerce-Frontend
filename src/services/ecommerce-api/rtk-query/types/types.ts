import type { AppExtraArgument } from '@/shared/redux/redux';
import type { FetchArgs, BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RTKQueryError } from '@/services/ecommerce-api/rtk-query/types/RTKQueryError';

export type EcommerceBaseQuery = BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError, Partial<AppExtraArgument>>;
export type EcommerceExtendedQuery = BaseQueryFn<FetchArgs | string, unknown, RTKQueryError, Partial<AppExtraArgument>>;

// * Backend types

export interface ResponceOk {
  ok: boolean;
}

export interface BackendError {
  name: string;
  status: number;
  message: string;
}

// * Ecommerce types

export interface AppData {
  // TODO can use types from json iso
  languages: string[];
  currencies: string[];
  isUserLogged: boolean;
  countries: Record<string, string>;
  countriesWithoutPostal?: Record<string, string>;
}
