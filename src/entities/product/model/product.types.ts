import type { PriceTransformed } from '@/shared/api/ecommerce-api';
import type { Image, LocalizedString, ByProjectKeyProductProjectionsSearchRequestBuilder } from '@commercetools/platform-sdk';

// * Colors
export type ColorsValues = Colors[keyof Colors];
export type Colors = Record<string, { hex: string; value: string }>;

export type QueryProductsArgs = NonNullable<
  NonNullable<Parameters<ByProjectKeyProductProjectionsSearchRequestBuilder['get']>[0]>['queryArgs']
>;

export interface ProductLight {
  id: string;
  key: string;
  images: Image[];
  imageUrl: string;
  maxQuantity: number;
  name: LocalizedString;
  categoriesIdArr: string[];
  description: LocalizedString | undefined;
  pricesObj: Record<string, PriceTransformed>;
}
