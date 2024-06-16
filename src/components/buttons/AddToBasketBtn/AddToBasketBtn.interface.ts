import { ButtonProps } from '@mui/material';

export interface IAddToBasketProps extends ButtonProps {
  isIconBtn?: boolean;
  productKey: string;
  basketIconStyles?: string;
  progressIconStyles?: string;
}
