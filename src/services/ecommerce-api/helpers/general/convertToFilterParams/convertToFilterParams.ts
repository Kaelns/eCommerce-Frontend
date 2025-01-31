import type { QueryProductsArgs } from '@/shared/types/types';
import type { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/types';

import { LIMIT_ON_PAGE } from '@/services/ecommerce-api/data/constants';
import { convertSort, convertPrice, convertColors, convertSearch } from '@/services/ecommerce-api/helpers/general/convertToFilterParams/helpers';

//  FIXME Delete if not used. Maybe it will be replaced by zod

export function convertToFilterParams(filterState: Partial<FilterState>, limitOnPage = LIMIT_ON_PAGE): QueryProductsArgs {
  const sort = convertSort(filterState.sort);
  const search = convertSearch(filterState.search);

  const price = convertPrice(filterState.price);
  const colors = convertColors(filterState.color);
  // const category = convertCategories(filterState.categoryKey);

  const offset = ((filterState.page ?? 1) - 1) * limitOnPage;
  const sortObj = sort ? { sort } : {};
  const filtersQuery = [colors, /* category, */ price].filter(Boolean);

  const queryArgs = {
    'filter.query': filtersQuery,
    ...search,
    ...sortObj,
    offset
  };

  return queryArgs;
}
