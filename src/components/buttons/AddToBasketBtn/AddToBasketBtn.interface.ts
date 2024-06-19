import { ButtonProps } from '@mui/material';

export interface IAddToBasketProps extends ButtonProps {
  isIconBtn?: boolean;
  productId: string;
  lineItemId: string;
  availability: boolean;
  basketIconStyles?: string;
  progressIconStyles?: string;
}

export interface IUseAddToBasket {
  isInCart: boolean;
  isDisabled: boolean;
  addToBasket: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}
