import type { PriceConverted } from '@/shared/model/types/types';
import type { Image, LocalizedString, ByProjectKeyProductProjectionsSearchRequestBuilder } from '@commercetools/platform-sdk';

export type SrcsetPxAsc = [string, `${number}w`][];
export type SearchTextQueryArgKey = `text.${string}`;

// * Colors
export type ColorsValues = Colors[keyof Colors];
export type Colors = Record<string, { hex: string; value: string }>;

export type QueryProductsArgs = NonNullable<
  NonNullable<Parameters<ByProjectKeyProductProjectionsSearchRequestBuilder['get']>[0]>['queryArgs']
>;

export interface Product {
  id: string;
  key: string;
  images: Image[];
  imageUrl: string;
  maxQuantity: number;
  name: LocalizedString;
  categoriesIdArr: string[];
  description: LocalizedString | undefined;
  pricesObj: Record<string, PriceConverted>;
}
