import type { FilterColorsKeys, FilterColorsValues } from '@/shared/types/types';
import type { FilterColorsState } from '@/pages/CatalogPage/features/catalog-filters/data/types';
import type { ConvertSearchReturn } from '@/services/ecommerce-api/helpers/general/convertFilterToQueryArgs/types';

import { LANGUAGE, FRACTION_DOZENS } from '@/services/ecommerce-api/data/constants';
import { queryArgsProductProps } from '@/services/ecommerce-api/helpers/products/queryArgsProductProps';

import { Sort } from '@/pages/CatalogPage/features/catalog-filters';

import { MIN_MONEY, MAX_MONEY, NO_CATEGORY, FILTER_COLORS } from '@/shared/data/constants';

export function convertPageQueryArgs(page: number | undefined, limitOnPage: number) {
  return ((page ?? 1) - 1) * limitOnPage;
}
export function convertSortQueryArgs(typeOfSort: Sort | undefined) {
  switch (typeOfSort) {
    case Sort.NAME_ASC:
      return queryArgsProductProps.sort.nameAsc(LANGUAGE);
    case Sort.NAME_DESC:
      return queryArgsProductProps.sort.nameDesc(LANGUAGE);
    case Sort.PRICE_ASC:
      return queryArgsProductProps.sort.priceAsc;
    case Sort.PRICE_DESC:
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

export function convertColorsQueryArgs(colors: FilterColorsState | undefined): string {
  if (!colors) {
    return '';
  }
  const colorsEntries = Object.entries(colors) as [FilterColorsKeys, boolean][];
  const colorsArr = colorsEntries.filter(([, isColor]) => isColor).map<FilterColorsValues>(([key]) => FILTER_COLORS[key]);
  return queryArgsProductProps.filterQuery.colors(colorsArr);
}

// TODO add tuple type
export function convertPriceQueryArgs(price: number[] | undefined): string {
  if (!price || !price.length || (price[0] <= MIN_MONEY && price[1] >= MAX_MONEY)) {
    return '';
  }
  return queryArgsProductProps.filterQuery.priceRange(price[0] * FRACTION_DOZENS, price[1] * FRACTION_DOZENS);
}

export function convertCategoriesQueryArgs(categoryId: string | undefined): string {
  if (!categoryId) {
    return '';
  }
  const category = categoryId !== NO_CATEGORY ? categoryId : '';
  return queryArgsProductProps.filterQuery.categoryId(category);
}
