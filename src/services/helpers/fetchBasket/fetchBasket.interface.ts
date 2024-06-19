import { LineItem } from '@commercetools/platform-sdk';

export interface IBasketResponce {
  basket: LineItem[];
  discount: number;
  isDiscounted: boolean;
}
