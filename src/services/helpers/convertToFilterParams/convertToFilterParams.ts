import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import {
  convertSort,
  convertPrice,
  convertSearch,
  convertColors,
  convertCategories
} from '@/services/helpers/convertToFilterParams/convertToFilterParams.helpers';
import { IConvertToFilterParamsReturn } from '@/services/helpers/convertToFilterParams/convertToFilterParams.interface';

export function convertToFilterParams(filterState: IFilterState): IConvertToFilterParamsReturn {
  const sort = convertSort(filterState.sort);
  const price = convertPrice(filterState.price);
  const search = convertSearch(filterState.search);
  const colors = convertColors(filterState.color);
  const category = convertCategories(filterState.categoryKey);

  const filters = [colors, category, price].filter((el) => el);

  const parameters = {
    sort,
    'filter.query': [...filters],
    ...search
  };

  return parameters;
}
