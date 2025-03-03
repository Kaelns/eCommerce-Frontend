import type { Colors } from '@/entities/product';
import type { Currencies } from '@/shared/model/types/types';
import type { FilterColorsState } from '@/features/catalog-filters/model/types';
import type { ConvertSearchReturn } from '@/features/catalog-filters/model/redux/helpers/convertFilterToQueryArgs/types';

import { ProductConsts } from '@/entities/product';
import { queryArgsProductProps } from '@/entities/product/lib/helpers/queryArgsProductProps';

import { FiltersSort } from '@/features/catalog-filters';

import currencyData from '@/shared/model/data/ISO4217/ISO4217-currencies.json';

export function convertPageQueryArgs(page: number | undefined, limitOnPage: number) {
  return ((page ?? 1) - 1) * limitOnPage;
}
export function convertColorsQueryArgs(colorsState: FilterColorsState | undefined, colors: Colors, language: string): string {
  if (!colorsState) {
    return '';
  }
  const colorsEntries = Object.entries(colorsState) as [string, boolean][];
  const colorsArr = colorsEntries.filter(([, isColor]) => isColor).map(([key]) => colors[key].value);
  return queryArgsProductProps.filterQuery.colors(colorsArr, language);
}

export function convertSortQueryArgs(typeOfSort: FiltersSort | undefined, language: string) {
  switch (typeOfSort) {
    case FiltersSort.NAME_ASC:
      return queryArgsProductProps.sort.nameAsc(language);
    case FiltersSort.NAME_DESC:
      return queryArgsProductProps.sort.nameDesc(language);
    case FiltersSort.PRICE_ASC:
      return queryArgsProductProps.sort.priceAsc;
    case FiltersSort.PRICE_DESC:
      return queryArgsProductProps.sort.priceDesc;
    default:
      return '';
  }
}

export function convertSearchQueryArgs(searchString: string | undefined, language: string): ConvertSearchReturn {
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

  const textProperty = queryArgsProductProps.search.textProp(language);

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
  const category = categoryId !== ProductConsts.NO_CATEGORY ? categoryId : '';
  return queryArgsProductProps.filterQuery.categoryId(category);
}

export function convertPriceQueryArgs(price: number[] | undefined, currency: Currencies): string {
  if (!price || !price.length || (price[0] <= ProductConsts.MIN_MONEY && price[1] >= ProductConsts.MAX_MONEY)) {
    return '';
  }
  const fractionDigits = currencyData[currency].fractionDigits;
  return queryArgsProductProps.filterQuery.priceRange(price[0] * 10 ** fractionDigits, price[1] * 10 ** fractionDigits);
}
