import { useEffect, useState } from 'react';
import { IReturnUseFetch } from '@/hooks/useFetch/useFetch.interface';

export function useFetch<T, P>(func: (parameters?: P) => T, parameters?: P): IReturnUseFetch<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
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
