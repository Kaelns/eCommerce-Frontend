import type { QueryProductsArgs } from '@/shared/types/types';
import type { FilterState } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';

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
  const sortValue = convertSortQueryArgs(filterState.sort);
  const searchObj = convertSearchQueryArgs(filterState.search);
  const offset = convertPageQueryArgs(filterState.page, limitOnPage);

  const price = convertPriceQueryArgs(filterState.filterQuery.price);
  const colors = convertColorsQueryArgs(filterState.filterQuery.colorObj);
  const category = convertCategoriesQueryArgs(filterState.filterQuery.categoryId);

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
