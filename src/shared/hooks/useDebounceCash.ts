import { useState, useEffect } from 'react';

export function useDebounceCache<T, P>(nextData: T, skipCaching?: P, delay = 1000): T[] {
  const [currentData, setCurrentData] = useState<T>(nextData);
  const [prevData, setPrevData] = useState<T>(nextData);
  const [isSkipCaching, setIsSkipCaching] = useState(false);

  useEffect(() => {
    setIsSkipCaching(true);
  }, [skipCaching]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isSkipCaching) {
        setPrevData(nextData);
        setIsSkipCaching(false);
      } else {
        setPrevData(currentData);
      }
      setCurrentData(nextData);
    }, delay);

    return (): void => clearTimeout(timeout);
  }, [delay, nextData, currentData, isSkipCaching]);

  return [currentData, prevData];
}
