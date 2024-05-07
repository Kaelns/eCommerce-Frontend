function updateObject<T, P>(object: T, keyToUpdate: keyof T, value: P): T {
  return {
    ...object,
    [keyToUpdate]: value
  };
}

export { updateObject };
