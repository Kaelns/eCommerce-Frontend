import type { Prices } from '@/shared/model/types/types';
import type { Image, ByProjectKeyProductProjectionsSearchRequestBuilder } from '@commercetools/platform-sdk';

export type SrcsetPxAsc = [string, `${number}w`][];
export type SearchTextQueryArgKey = `text.${string}`;

// * Colors
export type ColorsValues = Colors[keyof Colors];
export type Colors = Record<string, { hex: string; value: string }>;

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
