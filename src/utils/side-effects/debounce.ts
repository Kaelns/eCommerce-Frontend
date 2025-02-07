import type { FunctionAny } from '@/shared/types/types';

export function debounce<T extends FunctionAny>(func: T, delay = 1000) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
