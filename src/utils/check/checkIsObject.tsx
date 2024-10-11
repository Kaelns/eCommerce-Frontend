export function checkIsObject(test: unknown): test is object {
  return typeof test === 'object' && test !== null;
}
