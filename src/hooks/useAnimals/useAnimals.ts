import { useEffect, useState } from 'react';
import IUseAnimalsReturnType from './useAnimals.interface';
import { IAnimalsObj } from '@/data/interface/interface';
import { AnimalsServices } from '@/services/AnimalsServices';

export function useAnimals(): IUseAnimalsReturnType {
  const [animals, setAnimals] = useState<IAnimalsObj>({});
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchAnimals(): Promise<void> {
    try {
      setError('');
      setIsLoading(true);
      const animalsObj: IAnimalsObj = await AnimalsServices.getAll();
      setAnimals(animalsObj);
      setIsLoading(false);
    } catch (e: unknown) {
      const typedError = e as Error;
      setError(typedError.message);
    }
  }

  useEffect(() => {
    fetchAnimals();
  }, []);

  return { animals, setAnimals, error, isLoading };
}
