import type { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';
import { LIMIT_ON_PAGE } from '@/services/ecommerce';
import {
  convertSort,
  convertPrice,
  convertSearch,
  convertColors,
  convertCategories
} from '@/services/ecommerce/helpers/general/convertToFilterParams/convertToFilterParams.helpers';
import type { IQueryProductsArgs } from '@/shared/types/types';

export function convertToFilterParams(filterState: Partial<IFilterState>): IQueryProductsArgs {
  const sort = convertSort(filterState.sort);
  const search = convertSearch(filterState.search);

  const price = convertPrice(filterState.price);
  const colors = convertColors(filterState.color);
  const category = convertCategories(filterState.categoryKey);

  const offset = ((filterState.page ?? 1) - 1) * LIMIT_ON_PAGE;
  const sortObj = sort ? { sort } : {};
  const filtersQuery = [colors, category, price].filter(Boolean);

  const queryArgs = {
    'filter.query': filtersQuery,
    ...search,
    ...sortObj,
    offset
  };

  return queryArgs;
}
