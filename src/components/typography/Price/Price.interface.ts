export enum PriceType {
  DISCOUNT,
  PRICE
}

export interface IPriceProps {
  price: number;
  priceType: PriceType;
  className?: string;
}
