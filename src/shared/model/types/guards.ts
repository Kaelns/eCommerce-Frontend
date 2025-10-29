import { isObject as isObjectLodash } from 'lodash';

export const isObject = (elem: unknown): elem is object => {
  return isObjectLodash(elem) && !Array.isArray(elem);
};
