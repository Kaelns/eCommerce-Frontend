import type { BackendError, SrcsetPxAsc } from '@/shared/types/types';
import { isObject } from '@/shared/types/types';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const isBackendError = (obj: unknown): obj is BackendError => {
  return isObject(obj) && 'name' in obj && 'status' in obj && 'message' in obj;
};
export const isFetchBaseQueryError = (obj: unknown): obj is FetchBaseQueryError => {
  return isObject(obj) && 'status' in obj && 'data' in obj;
};

// FIXME Delete if not used
export function isISrcsetPxAsc(elem: unknown): elem is SrcsetPxAsc {
  return Array.isArray(elem) && Array.isArray(elem[0]) && elem[0].length === 2 && typeof elem[0][0] === 'string' && typeof elem[0][1] === 'string';
}
