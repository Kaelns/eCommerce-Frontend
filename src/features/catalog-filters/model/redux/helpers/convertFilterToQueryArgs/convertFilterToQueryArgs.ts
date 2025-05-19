import type { QueryProductsArgs } from '@/entities/product';
import type { FilterState } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { ProductConsts } from '@/entities/product';

import {
  convertSortQueryArgs,
  convertPageQueryArgs,
  convertPriceQueryArgs,
  convertColorsQueryArgs,
  convertSearchQueryArgs,
  convertCategoriesQueryArgs
} from '@/features/catalog-filters/model/redux/helpers/convertFilterToQueryArgs/helpers';

interface ConvertFilterToQueryArgsSettings {
  limitOnPage?: number;
}

export function convertFilterToQueryArgs(
  filterState: FilterState,
  { limitOnPage = ProductConsts.LIMIT_ON_PAGE }: ConvertFilterToQueryArgsSettings | undefined = {}
): QueryProductsArgs {
  const sortValue = convertSortQueryArgs(filterState.filters.sort, filterState.language);
  const searchObj = convertSearchQueryArgs(filterState.filters.search, filterState.language);
  const offset = convertPageQueryArgs(filterState.filters.page, limitOnPage);

  const price = convertPriceQueryArgs(filterState.filters.price, filterState.currency);
  const colors = convertColorsQueryArgs(filterState.filters.colorObj, filterState.colors, filterState.language);
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
