import { useEffect, useState } from 'react';
import IUseAnimalsReturnType from './useAnimals.interface';
import { IAnimalsObj } from '@/data/interface/interface';

export function useAnimals(): IUseAnimalsReturnType {
  const [animals, setAnimals] = useState<IAnimalsObj>({});
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchAnimals(): Promise<void> {
    try {
      setError('');
      setLoading(true);
      const response: Response = await fetch('animals.json');
      const animalsObj: IAnimalsObj = await response.json();
      setAnimals(animalsObj);
      setLoading(false);
    } catch (e: unknown) {
      const typedError = e as Error;
      setError(typedError.message);
    }
  }

  useEffect(() => {
    fetchAnimals();
  }, []);

  return { animals, setAnimals, error, loading };
}
