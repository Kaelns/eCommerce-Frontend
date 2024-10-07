import { Theme, SystemStyleObject } from '@mui/system';
import { ByProjectKeyProductProjectionsSearchRequestBuilder, Image } from '@commercetools/platform-sdk';

export type PropsWithChildren<P = unknown> = P & { children: React.ReactNode };

export type InputReactEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type Sizes = 'small' | 'medium' | 'large';

export type SxPropsObj<T extends object = Theme> = SystemStyleObject<T>;
export type SxPropsCallback<T extends object = Theme> = (theme: Theme) => SystemStyleObject<T>;
export type SxPropsArr<T extends object = Theme> = ReadonlyArray<boolean | SxPropsObj<T> | SxPropsCallback<T>>;
export type SxPropsNotArr<T extends object = Theme> = SxPropsObj<T> | SxPropsCallback<T>;
export type SxStyles<T extends object = Theme> = Record<string, SxPropsNotArr<T>>;
export interface ICategoryTreeNode {
  id: string;
  key: string;
  children: ICategoryTreeNode[];
}

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
export interface IBasketProduct extends IPrices {
  id: string;
  lineId: string;
  key: string;
  name: string;
  images: Image[];
  quantity: number;
  maxQuantity: number;
  imageUrl: string;
}

export interface IBasketProducts {
  [key: string]: IBasketProduct;
}

export interface IAutocompleteOptions {
  label: string;
  code: string;
  postalCodePattern: RegExp;
}

export type IQueryProductsArgs = NonNullable<
  NonNullable<Parameters<ByProjectKeyProductProjectionsSearchRequestBuilder['get']>[0]>['queryArgs']
>;

export type ISrcsetPxAsc = [string, `${number}w`][];
export function isISrcsetPxAsc(elem: unknown): elem is ISrcsetPxAsc {
  return (
    Array.isArray(elem) &&
    Array.isArray(elem[0]) &&
    elem[0].length === 2 &&
    typeof elem[0][0] === 'string' &&
    typeof elem[0][1] === 'string'
  );
}
