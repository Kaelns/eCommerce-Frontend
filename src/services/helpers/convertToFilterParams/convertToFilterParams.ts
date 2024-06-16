import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';
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
  const search = convertSearch(filterState.search);

  const price = convertPrice(filterState.price);
  const colors = convertColors(filterState.color);
  const category = convertCategories(filterState.categoryKey);

  const offset = (filterState.page - 1) * LIMIT_ON_PAGE;
  const sortObj = sort ? { sort } : {};
  const filters = [colors, category, price].filter(Boolean);

  const parameters = {
    'filter.query': [...filters],
    ...search,
    ...sortObj,
    offset
  };

  return parameters;
}
