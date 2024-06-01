import { Dispatch, SetStateAction } from 'react';
import { Price } from '@/features/FilterForm/data/FilterForm.type';

export interface IRangeSliderProps {
  price: Price;
  setPrice: Dispatch<SetStateAction<Price>>;
  min: number;
  max: number;
}
