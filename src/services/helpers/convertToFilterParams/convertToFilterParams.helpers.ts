import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { Colors } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { IColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.interface';
import { FRACTION_DIGITS, LANGUAGE } from '@/services/ECommerceInitApi.constants';
import { MAX_MONEY, MIN_MONEY, NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import {
  IConvertSearchReturn,
  PROPERTY
} from '@/services/helpers/convertToFilterParams/convertToFilterParams.interface';
import { findInCategories } from '@/services/helpers/findInCategories';

export function convertSort(typeOfSort: Sort): string {
  switch (typeOfSort) {
    case Sort.NAME_ASC:
      return `name.${LANGUAGE} asc`;
    case Sort.NAME_DESC:
      return `name.${LANGUAGE} desc`;
    case Sort.PRICE_ASC:
      return 'price asc';
    case Sort.PRICE_DESC:
      return `price desc`;
    case Sort.NO_SORT:
      return '';
    default:
      return '';
  }
}

export function convertSearch(searchString: string): IConvertSearchReturn {
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
    fuzzy: true,
    [PROPERTY]: searchString,
    fuzzyLevel
  };
}

export function convertPrice(price: number[]): string {
  if (price[0] === MIN_MONEY && price[1] === MAX_MONEY) {
    return '';
  }
  return `variants.price.centAmount:range (${price[0] * FRACTION_DIGITS} to ${price[1] * FRACTION_DIGITS}) `;
}

export function convertColors(colors: IColorsState): string {
  const value = Object.entries(colors)
    .filter(([, val]) => val)
    .reduce(
      (acc, [key]) =>
        acc ? `${acc}, "${Colors[key as keyof IColorsState]}"` : `"${Colors[key as keyof IColorsState]}"`,
      ''
    );
  return value ? `variants.attributes.color-filter.key: ${value}` : '';
}

export function convertCategories(categoryKey: string): string {
  const category = categoryKey !== NO_CATEGORY ? findInCategories(eCommerceAPI.categories, [categoryKey])[0] : '';
  return category ? `categories.id: "${category.id}"` : '';
}
