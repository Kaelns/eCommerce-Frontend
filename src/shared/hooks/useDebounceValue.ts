import { useState, useEffect } from 'react';

export function useDebounceValue<T>(value: T, delay = 1000): T {
  const [data, setData] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(value);
    }, delay);

    return (): void => clearTimeout(timeout);
  }, [delay, value]);

  return data;
}
