import { LANGUAGE, FRACTION_DOZENS } from '@/services/ecommerce-api/data/constants';
import { queryArgsProductProps } from '@/services/ecommerce-api/helpers/products/queryArgsProductProps';
import { PROPERTY, IConvertSearchReturn } from '@/services/ecommerce-api/helpers/general/convertToFilterParams/types';

import { Sort } from '@/pages/CatalogPage/features/CatalogFilterForm';
import { FilterColorsState } from '@/pages/CatalogPage/features/CatalogFilterForm/types';

import { FilterColorsKeys, FilterColorsValues } from '@/shared/types/types';
import { MIN_MONEY, MAX_MONEY, NO_CATEGORY, FILTER_COLORS } from '@/shared/data/constants';

export function convertSort(typeOfSort: Sort | undefined) {
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

export function convertSearch(searchString: string | undefined): IConvertSearchReturn {
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

  return {
    [PROPERTY]: searchString,
    fuzzy: true,
    fuzzyLevel
  };
}

export function convertColors(colors: FilterColorsState | undefined): string {
  if (!colors) {
    return '';
  }
  const colorsEntries = Object.entries(colors) as [FilterColorsKeys, boolean][];
  const colorsArr = colorsEntries.filter(([, isColor]) => isColor).map<FilterColorsValues>(([key]) => FILTER_COLORS[key]);
  return queryArgsProductProps.filterQuery.colors(colorsArr);
}

export function convertPrice(price: number[] | undefined): string {
  if (!price || !price.length || (price[0] === MIN_MONEY && price[1] === MAX_MONEY)) {
    return '';
  }
  return queryArgsProductProps.filterQuery.priceRange(price[0] * FRACTION_DOZENS, price[1] * FRACTION_DOZENS);
}

export function convertCategories(categoryId: string | undefined): string {
  if (!categoryId) {
    return '';
  }
  const category = categoryId !== NO_CATEGORY ? categoryId : '';
  return queryArgsProductProps.filterQuery.categoryId(category);
}
