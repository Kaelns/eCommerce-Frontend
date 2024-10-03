import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { FRACTION_DOZENS, LANGUAGE } from '@/services/ECommerceInitApi.constants';
import { MAX_MONEY, MIN_MONEY, NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import {
  IConvertSearchReturn,
  PROPERTY
} from '@/services/helpers/convertToFilterParams/convertToFilterParams.interface';
import { findInCategories } from '@/services/helpers/findInCategories';
import { IFilterColorsKeys, IFilterColorsState } from '@/features/FilterForm/FilterForm.types';
// import { FilterColors } from '@/features/FilterForm/FilterForm.constants';

export function convertSort(typeOfSort: Sort | undefined): string {
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
    fuzzy: true,
    [PROPERTY]: searchString,
    fuzzyLevel
  };
}

export function convertPrice(price: number[] | undefined): string {
  if (!price || !price.length) {
    return '';
  }
  if (price[0] === MIN_MONEY && price[1] === MAX_MONEY) {
    return '';
  }
  return `variants.price.centAmount:range (${price[0] * FRACTION_DOZENS} to ${price[1] * FRACTION_DOZENS})`;
}

export function convertColors(colors: IFilterColorsState | undefined): string {
  if (!colors) {
    return '';
  }
  const colorsEntries = Object.entries(colors) as [IFilterColorsKeys, boolean][];
  const value = colorsEntries
    .filter(([, val]) => val)
    .reduce((acc, [key]) => (acc ? `${acc}, "${key}"` : `"${key}"`), '');
  return value ? `variants.attributes.color:${value}` : '';
}

export function convertCategories(categoryKey: string | undefined): string {
  if (!categoryKey) {
    return '';
  }
  // FIXME getCategoriesObj
  const category = categoryKey !== NO_CATEGORY ? findInCategories(eCommerceAPI.categories, [categoryKey])[0] : '';
  return category ? `categories.id: "${category.id}"` : '';
}
