interface IIdElement {
  id: string;
}

export function convertArrOfIdElemToIdObj<T extends IIdElement[]>(arr: T): Record<string, T[0]> {
  return arr.reduce<Record<string, T[0]>>((acc, elem) => {
    acc[elem.id] = elem;
    return acc;
  }, {});
}
