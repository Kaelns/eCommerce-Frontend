import { useEffect, useState } from 'react';
import { IReturnUseFetch } from '@/hooks/useFetch/useFetch.interface';

export function useFetch<T, P, U>(func: () => T, parameters?: P, refreshState?: U): IReturnUseFetch<Awaited<T>>;
export function useFetch<T, P, U>(
  func: (parameters: P) => T,
  parameters: P,
  refreshState?: U
): IReturnUseFetch<Awaited<T>>;
export function useFetch<T, P, U>(
  func: (parameters: P) => T,
  parameters: P,
  refreshState?: U
): IReturnUseFetch<Awaited<T>> {
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
  }, [func, parameters, refreshState]);

  return { data, error, isLoading };
}
