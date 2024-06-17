import { useEffect, useState } from 'react';

export function useDebounceCash<T>(value: T, delay = 1000): T[] {
  const [data, setData] = useState<T>(value);
  const [prevData, setPrevData] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPrevData(data);
      setData(value);
    }, delay);

    return (): void => clearTimeout(timeout);
  }, [data, delay, value]);

  return [data, prevData];
}
