import { InputReactEvent } from '@/data/types/InputReactEvent';
import { MIN_DISTANCE } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.constants';
import { MAX_MONEY, MIN_MONEY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { IAction, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import { Price } from '@/features/FilterForm/data/FilterForm.type';

export function changeRangeSlider(dispatchFilterState: React.Dispatch<IAction>) {
  return (_event: Event | InputReactEvent, newValue: number | Price, activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < MIN_DISTANCE) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], MAX_MONEY - MIN_DISTANCE);
        dispatchFilterState({ type: FilterState.PRICE, payload: [clamped, clamped + MIN_DISTANCE] });
      } else {
        const clamped = Math.max(newValue[1], MIN_DISTANCE);
        dispatchFilterState({ type: FilterState.PRICE, payload: [clamped - MIN_DISTANCE, clamped] });
      }
    } else {
      dispatchFilterState({ type: FilterState.PRICE, payload: newValue });
    }
  };
}

export function changeRangeInput(
  isLeft: boolean,
  filterState: IFilterState,
  dispatchFilterState: React.Dispatch<IAction>
) {
  return (event: InputReactEvent): void => {
    const value = +event.target.value;
    if (!Number.isNaN(value) && value < MAX_MONEY && value > MIN_MONEY) {
      if (isLeft) {
        changeRangeSlider(dispatchFilterState)(event, [value, filterState.price[1]], 0);
      } else {
        changeRangeSlider(dispatchFilterState)(event, [filterState.price[0], value], 1);
      }
    }
  };
}
