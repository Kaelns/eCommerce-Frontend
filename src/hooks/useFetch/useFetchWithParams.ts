import { useEffect, useState } from 'react';
import { IReturnUseFetch } from '@/hooks/useFetch/useFetch.interface';

export function useFetchWithParams<T, P>(func: (parameters: P) => T, parameters: P): IReturnUseFetch<Awaited<T>> {
  const [data, setData] = useState<Awaited<T>>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const dataResp = await func(parameters);
        setData(dataResp);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };

    load();
  }, [func, parameters]);

  return { data, error, isLoading };
}
