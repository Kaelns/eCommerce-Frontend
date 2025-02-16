import type { SearchTextQueryArgKey } from '@/shared/types/types';

import { LANGUAGE } from '@/services/ecommerce-api/data/constants';

export const queryArgsProductProps = {
  filterQuery: {
    categoryId: (categoryId: string) => (categoryId ? `categories.id: "${categoryId}"` : ''),
    colors: (colorsArr: string[], language = LANGUAGE) =>
      colorsArr.length ? `variants.attributes.color.${language}: "${colorsArr.join('", "')}"` : '',
    colorsKey: (language = LANGUAGE) => `variants.attributes.color.${language}`,
    priceRange: (minMoney: number, maxMoney: number) => `variants.price.centAmount:range (${minMoney} to ${maxMoney})`
  },
  sort: {
    nameAsc: (language: string) => `name.${language} asc`,
    nameDesc: (language: string) => `name.${language} desc`,
    priceAsc: 'price asc',
    priceDesc: 'price desc'
  },
  search: {
    textProp: (language: string): SearchTextQueryArgKey => `text.${language}`
  }
} as const;
