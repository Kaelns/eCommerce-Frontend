import { ReactNode } from 'react';

interface IAnimalsObj {
  [x: string]: IAnimals;
}

interface IAnimals {
  id: number;
  animal: string;
  isSleeping: boolean;
}

type TComponentPropsWithChildren<T = unknown> = T & { children: ReactNode };

export type { IAnimalsObj, IAnimals, TComponentPropsWithChildren };
