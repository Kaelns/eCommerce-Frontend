import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export interface IUseBasketReturn {
  isLoading: boolean;
  error: string;
  amount: number;
  basketProducts: IBasketProducts;
  setBasketProducts: React.Dispatch<React.SetStateAction<IBasketProducts>>;
  finalPrice: number;
  setFinalPrice: React.Dispatch<React.SetStateAction<number>>;
}
