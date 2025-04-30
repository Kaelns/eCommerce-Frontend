import type { isoCurrencies } from '@/shared/model/data';
import type { Theme, SystemStyleObject } from '@mui/system';

// * General types

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FunctionAny = (...args: any[]) => any;

export interface TreeNode {
  id: string;
  key: string;
  children: TreeNode[];
}

// * React types

export type PropsWithChildren<P = unknown> = { children: React.ReactNode } & P;

export type InputReactEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// * MUI types
export type Sizes = 'large' | 'medium' | 'small';

export type SxPropsObj<T extends object = Theme> = SystemStyleObject<T>;
export type SxStyles<T extends object = Theme> = Record<string, SxPropsNotArr<T>>;

export type SxPropsNotArr<T extends object = Theme> = SxPropsCallback<T> | SxPropsObj<T>;
export type SxPropsCallback<T extends object = Theme> = (theme: Theme) => SystemStyleObject<T>;

export type SxPropsArr<T extends object = Theme> = ReadonlyArray<boolean | SxPropsCallback<T> | SxPropsObj<T>>;

// * Ecommerce types

export type Currencies = keyof typeof isoCurrencies;

export interface PriceConverted {
  price: number;
  discount: number;
  currencyCode: string;
  fractionDigits: number;
  discountedPrice: number;
}
