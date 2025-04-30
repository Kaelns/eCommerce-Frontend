import type { InputReactEvent } from '@/shared/model/types';
import type { AppDispatch } from '@/shared/lib/redux/redux.types';

import { ProductConsts } from '@/entities/product';

import { SLIDER_MIN_DISTANCE } from '@/features/catalog-filters/model/constants';
import { setPriceFormAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

export function changeRangeInput(isLeftThumb: boolean, priceState: number[], dispatch: AppDispatch) {
  return (event: InputReactEvent): void => {
    const value = +event.target.value;
    if (!Number.isNaN(value) && value > ProductConsts.MIN_MONEY && value < ProductConsts.MAX_MONEY) {
      const newValue = isLeftThumb ? [value, priceState[1]] : [priceState[0], value];
      const activeThumb = isLeftThumb ? 0 : 1;
      changeRangeSlider(dispatch)(event, newValue, activeThumb);
    }
  };
}

export function changeRangeSlider(dispatch: AppDispatch) {
  return (_event: Event | InputReactEvent, newValue: number | number[], activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }
    let priceArr: number[] = [];
    const [leftThumbVal, rightThumbVal] = newValue;

    const isThumbsClampedToEachOther = rightThumbVal - leftThumbVal < SLIDER_MIN_DISTANCE;

    if (isThumbsClampedToEachOther) {
      const isLeftThumb = activeThumb === 0;

      if (isLeftThumb) {
        const clampedVal = Math.min(leftThumbVal, ProductConsts.MAX_MONEY - SLIDER_MIN_DISTANCE);
        priceArr = [clampedVal, clampedVal + SLIDER_MIN_DISTANCE];
      } else {
        const clampedVal = Math.max(rightThumbVal, SLIDER_MIN_DISTANCE);
        priceArr = [clampedVal - SLIDER_MIN_DISTANCE, clampedVal];
      }
    } else {
      priceArr = newValue;
    }
    dispatch(setPriceFormAction(priceArr));
  };
}
