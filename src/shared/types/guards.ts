import type { SrcsetPxAsc } from '@/shared/types/types';

import { isObject as isObjectLodash } from 'lodash';

export const isObject = (elem: unknown): elem is object => {
  return isObjectLodash(elem) && !Array.isArray(elem);
};

// FIXME Delete if not used
export function isISrcsetPxAsc(elem: unknown): elem is SrcsetPxAsc {
  return Array.isArray(elem) && Array.isArray(elem[0]) && elem[0].length === 2 && typeof elem[0][0] === 'string' && typeof elem[0][1] === 'string';
}
