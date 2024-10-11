export function filterUndefinedProperties<T extends object>(obj: T): T {
  return Object.entries(obj).reduce<Record<string, unknown>>((acc, [key, value]) => {
    // TODO recursive function for nested objects
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {}) as T;
}
