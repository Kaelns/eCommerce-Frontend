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

export type SxStylesObj<T extends object = Theme> = SystemStyleObject<T>;
export type SxStylesNotArr<T extends object = Theme> = SxStylesCallback<T> | SxStylesObj<T>;
export type SxStylesCallback<T extends object = Theme> = (theme: Theme) => SystemStyleObject<T>;

export type SxStylesMap<T extends object = Theme> = Record<string, SxStylesNotArr<T>>;
export type SxStylesArr<T extends object = Theme> = ReadonlyArray<boolean | SxStylesCallback<T> | SxStylesObj<T>>;

// * Ecommerce types

export type SrcsetInPx = [string, `${number}w`][];

export type Currencies = keyof typeof isoCurrencies;

export interface PriceConverted {
  price: number;
  discount: number;
  currencyCode: string;
  fractionDigits: number;
  discountedPrice: number;
}
