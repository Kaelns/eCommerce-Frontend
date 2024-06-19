import { useEffect, useState } from 'react';

export function useDebounceCash<T, P>(value: T, skipCash?: P, delay = 1000): T[] {
  const [data, setData] = useState<T>(value);
  const [cashData, setCashData] = useState<T>(value);
  const [isSkipCash, setIsSkipCash] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isSkipCash) {
        setCashData(value);
        setIsSkipCash(false);
      } else {
        setCashData(data);
      }
      setData(value);
    }, delay);

    return (): void => clearTimeout(timeout);
  }, [delay, value, data, isSkipCash]);

  useEffect(() => {
    setIsSkipCash(true);
  }, [skipCash]);

  return [data, cashData];
}
