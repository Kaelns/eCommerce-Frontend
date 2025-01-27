import type { Theme, SystemStyleObject } from '@mui/system';
import type { ByProjectKeyProductProjectionsSearchRequestBuilder, Category, Image, ProductProjection } from '@commercetools/platform-sdk';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { isObject as isObjectLodash } from 'lodash';
import type { AppExtraArgument } from '@/shared/redux/redux';

export const isObject = (elem: unknown): elem is object => {
  return isObjectLodash(elem) && !Array.isArray(elem);
};

// * General types

export interface TreeNode {
  id: string;
  children: TreeNode[];
}

// * React types

export type PropsWithChildren<P = unknown> = P & { children: React.ReactNode };

export type InputReactEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// * MUI types
export type Sizes = 'small' | 'medium' | 'large';

export type SxPropsObj<T extends object = Theme> = SystemStyleObject<T>;
export type SxPropsCallback<T extends object = Theme> = (theme: Theme) => SystemStyleObject<T>;

export type SxPropsArr<T extends object = Theme> = ReadonlyArray<boolean | SxPropsObj<T> | SxPropsCallback<T>>;
export type SxPropsNotArr<T extends object = Theme> = SxPropsObj<T> | SxPropsCallback<T>;

export type SxStyles<T extends object = Theme> = Record<string, SxPropsNotArr<T>>;

// * Backend types

export interface ResponceOk {
  ok: boolean;
}

export interface BackendError extends ResponceOk {
  name: string;
  status: number;
  message: string;
}

// * EcommerceApi types

export type EcommerceBaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, Partial<AppExtraArgument>>;

export interface AppData {
  countries: Record<string, string>;
  currencies: string[];
  isUserLogged: boolean;
  countriesWithoutPostal?: Record<string, string>;
}

// ** Product types

export type SrcsetPxAsc = [string, `${number}w`][];
export type QueryProductsArgs = NonNullable<NonNullable<Parameters<ByProjectKeyProductProjectionsSearchRequestBuilder['get']>[0]>['queryArgs']>;

export interface Prices {
  price: number;
  discount: number;
  discountedPrice: number;
}

export interface Product extends Prices {
  id: string;
  key: string;
  name: string;
  images: Image[];
  imageUrl: string;
  maxQuantity: number;
  description: string;
  categoriesIdArr: string[];
}

//  *** Categories types

export type CategoriesObj = Record<Category['id'], Category>;

//  FIXME Delete if not used
export interface IProductsResponce {
  products: ProductProjection[];
  amount: number;
}
export interface CategoryTreeNode extends TreeNode {
  key: string;
  children: CategoryTreeNode[];
}

export interface Categories {
  categoriesTree: CategoryTreeNode[];
  categoriesObj: CategoriesObj;
  categories: Category[];
}

// ** Cart types

export interface CartProduct extends Prices {
  id: string;
  lineId: string;
  key: string;
  name: string;
  images: Image[];
  quantity: number;
  maxQuantity: number;
  imageUrl: string;
}

export interface CartProducts {
  [key: string]: CartProduct;
}

// ** User types
export interface AutocompleteOptions {
  label: string;
  code: string;
  postalCodePattern: RegExp;
}
