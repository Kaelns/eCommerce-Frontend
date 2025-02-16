import type { QueryProductsArgs } from '@/shared/types/types';
import type { FilterState } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { LIMIT_ON_PAGE } from '@/services/ecommerce-api/data/constants';
import {
  convertSortQueryArgs,
  convertPageQueryArgs,
  convertPriceQueryArgs,
  convertColorsQueryArgs,
  convertSearchQueryArgs,
  convertCategoriesQueryArgs
} from '@/services/ecommerce-api/helpers/general/convertFilterToQueryArgs/helpers';

export function convertFilterToQueryArgs(filterState: FilterState, limitOnPage = LIMIT_ON_PAGE): QueryProductsArgs {
  const sortValue = convertSortQueryArgs(filterState.filters.sort);
  const searchObj = convertSearchQueryArgs(filterState.filters.search);
  const offset = convertPageQueryArgs(filterState.filters.page, limitOnPage);

  const price = convertPriceQueryArgs(filterState.filters.price);
  const colors = convertColorsQueryArgs(filterState.filters.colorObj, filterState.colors);
  const category = convertCategoriesQueryArgs(filterState.filters.categoryId);

  const filterQuery = [colors, category, price].filter(Boolean);

  const sortObj = sortValue ? { sort: sortValue } : {};
  const filterQueryObj = filterQuery.length ? { 'filter.query': filterQuery } : {};

  const queryArgs = {
    ...filterQueryObj,
    ...searchObj,
    ...sortObj,
    offset
  };

  return queryArgs;
}
