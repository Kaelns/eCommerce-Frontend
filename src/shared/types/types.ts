import type { Theme, SystemStyleObject } from '@mui/system';
import type { ByProjectKeyProductProjectionsSearchRequestBuilder, Category, Image, ProductProjection } from '@commercetools/platform-sdk';

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
  message: string;
  statusCode: number;
}

// * EcommerceApi types

export interface IAppData {
  countries: Record<string, string>;
  currencies: string[];
  isUserLogged: boolean;
  countriesWithoutPostal?: Record<string, string>;
}

// ** Product types

export type ISrcsetPxAsc = [string, `${number}w`][];
export function isISrcsetPxAsc(elem: unknown): elem is ISrcsetPxAsc {
  return Array.isArray(elem) && Array.isArray(elem[0]) && elem[0].length === 2 && typeof elem[0][0] === 'string' && typeof elem[0][1] === 'string';
}

export type IQueryProductsArgs = NonNullable<NonNullable<Parameters<ByProjectKeyProductProjectionsSearchRequestBuilder['get']>[0]>['queryArgs']>;

export interface IPrices {
  price: number;
  discount: number;
  discountedPrice: number;
}
export interface IProduct extends IPrices {
  id: string;
  key: string;
  name: string;
  imageUrl: string;
  maxQuantity: number;
  description: string;
  categoriesIdArr: string[];
  images: Image[];
}

//  *** Categories types

export type ICategoriesObj = Record<Category['id'], Category>;
export interface IProductsResponce {
  products: ProductProjection[];
  amount: number;
}
export interface ICategoryTreeNode {
  id: string;
  key: string;
  children: ICategoryTreeNode[];
}
export interface ICategories {
  categoriesTree: ICategoryTreeNode[];
  categoriesObj: ICategoriesObj;
  categories: Category[];
}

// ** Cart types
export interface ICartProduct extends IPrices {
  id: string;
  lineId: string;
  key: string;
  name: string;
  images: Image[];
  quantity: number;
  maxQuantity: number;
  imageUrl: string;
}

export interface ICartProducts {
  [key: string]: ICartProduct;
}

// ** User types
export interface IAutocompleteOptions {
  label: string;
  code: string;
  postalCodePattern: RegExp;
}
export interface IAddress {
  country: string;
  postalCode: string;
  city: string;
  streetName: string;
}

export interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  addresses: IAddress[];
  shippingAddresses: number[];
  billingAddresses?: number[];
  defaultBillingAddress?: number;
  defaultShippingAddress?: number;
}

export interface IBodyUserCredentials {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
  addresses: {
    country: string;
    city: string;
    streetName: string;
    streetNumber: string;
    postalCode: string;
    apartment?: string | undefined;
  }[];
  shippingAddresses: number[];
  billingAddresses?: number[] | undefined;
  defaultBillingAddress?: number | undefined;
  defaultShippingAddress?: number | undefined;
}
