function isObjOrArr(value: unknown): value is Record<string, unknown> | unknown[] {
  return (typeof value === 'object' && value !== null) || Array.isArray(value);
}

export function omitUndefinedProps<T extends object | unknown[]>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, value) => {
      if (value !== undefined) {
        acc.push(isObjOrArr(value) ? omitUndefinedProps(value) : value);
      }
      return acc;
    }, []) as T;
  }

  return Object.entries(obj).reduce<Record<string, unknown>>((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = isObjOrArr(value) ? omitUndefinedProps(value) : value;
    }
    return acc;
  }, {}) as T;
}
