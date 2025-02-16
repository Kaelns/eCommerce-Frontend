import type { Theme, SystemStyleObject } from '@mui/system';
import type { Image, Category, ByProjectKeyProductProjectionsSearchRequestBuilder } from '@commercetools/platform-sdk';

//  TODO Split to separate files. Also organize Types folder.

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

// ** Product types

export type SrcsetPxAsc = [string, `${number}w`][];
export type SearchTextQueryArgKey = `text.${string}`;

export interface Prices {
  price: number;
  discount: number;
  discountedPrice: number;
}

export type QueryProductsArgs = NonNullable<
  NonNullable<Parameters<ByProjectKeyProductProjectionsSearchRequestBuilder['get']>[0]>['queryArgs']
>;

export interface Product extends Prices {
  id: string;
  key: string;
  name: string;
  images: Image[];
  imageUrl: string;
  description: string;
  maxQuantity: number;
  categoriesIdArr: string[];
}

//  *** Categories types

export type CategoriesObj = Record<Category['id'], Category>;

export interface CategoriesCollection {
  categories: Category[];
  categoriesTree: TreeNode[];
  categoriesObj: CategoriesObj;
}

// ** Cart types

export interface CartProducts {
  [key: string]: CartProduct;
}

export interface CartProduct extends Prices {
  id: string;
  key: string;
  name: string;
  lineId: string;
  images: Image[];
  imageUrl: string;
  quantity: number;
  maxQuantity: number;
}

// ** User types
export interface AutocompleteOptions {
  code: string;
  label: string;
  postalCodePattern: RegExp;
}
