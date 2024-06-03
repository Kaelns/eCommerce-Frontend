import { useEffect, useState } from 'react';
import { IReturnUseFetch } from '@/hooks/useFetch/useFetch.interface';

export function useFetch<T>(func: () => T): IReturnUseFetch<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const dataResp = await func();
        setData(dataResp);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };

    load();
  }, [func]);

  return { data, error, isLoading };
}
