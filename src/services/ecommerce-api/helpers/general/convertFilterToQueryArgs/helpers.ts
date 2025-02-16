import type { Colors } from '@/services/ecommerce-api/rtk-query/types/types';
import type { FilterColorsState } from '@/features/catalog-filters/model/types';
import type { ConvertSearchReturn } from '@/services/ecommerce-api/helpers/general/convertFilterToQueryArgs/types';

import { LANGUAGE, FRACTION_DOZENS } from '@/services/ecommerce-api/data/constants';
import { queryArgsProductProps } from '@/services/ecommerce-api/helpers/products/queryArgsProductProps';

import { FiltersSort } from '@/features/catalog-filters';

import { MIN_MONEY, MAX_MONEY, NO_CATEGORY } from '@/shared/data/constants';

export function convertPageQueryArgs(page: number | undefined, limitOnPage: number) {
  return ((page ?? 1) - 1) * limitOnPage;
}
export function convertColorsQueryArgs(colorsState: FilterColorsState | undefined, colors: Colors): string {
  if (!colorsState) {
    return '';
  }
  const colorsEntries = Object.entries(colorsState) as [string, boolean][];
  const colorsArr = colorsEntries.filter(([, isColor]) => isColor).map(([key]) => colors[key].value);
  return queryArgsProductProps.filterQuery.colors(colorsArr);
}

export function convertSortQueryArgs(typeOfSort: FiltersSort | undefined) {
  switch (typeOfSort) {
    case FiltersSort.NAME_ASC:
      return queryArgsProductProps.sort.nameAsc(LANGUAGE);
    case FiltersSort.NAME_DESC:
      return queryArgsProductProps.sort.nameDesc(LANGUAGE);
    case FiltersSort.PRICE_ASC:
      return queryArgsProductProps.sort.priceAsc;
    case FiltersSort.PRICE_DESC:
      return queryArgsProductProps.sort.priceDesc;
    default:
      return '';
  }
}

export function convertSearchQueryArgs(searchString: string | undefined, lang = LANGUAGE): ConvertSearchReturn {
  if (!searchString) {
    return {};
  }
  let fuzzyLevel = 0;
  const { length } = searchString;

  if (length <= 2) {
    fuzzyLevel = 0;
  } else if (length <= 5) {
    fuzzyLevel = 1;
  } else {
    fuzzyLevel = 2;
  }

  const textProperty = queryArgsProductProps.search.textProp(lang);

  return {
    [textProperty]: searchString,
    fuzzy: true,
    fuzzyLevel
  } as ConvertSearchReturn;
}

// TODO add tuple type
export function convertCategoriesQueryArgs(categoryId: string | undefined): string {
  if (!categoryId) {
    return '';
  }
  const category = categoryId !== NO_CATEGORY ? categoryId : '';
  return queryArgsProductProps.filterQuery.categoryId(category);
}

export function convertPriceQueryArgs(price: number[] | undefined): string {
  if (!price || !price.length || (price[0] <= MIN_MONEY && price[1] >= MAX_MONEY)) {
    return '';
  }
  return queryArgsProductProps.filterQuery.priceRange(price[0] * FRACTION_DOZENS, price[1] * FRACTION_DOZENS);
}
