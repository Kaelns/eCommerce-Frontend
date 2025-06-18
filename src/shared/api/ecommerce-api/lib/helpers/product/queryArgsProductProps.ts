import type { SearchTextQueryArgKey } from '@/shared/api/ecommerce-api/model/types/types';

export const queryArgsProductProps = {
  filterQuery: {
    categoryId: (categoryId: string) => (categoryId ? `categories.id: "${categoryId}"` : ''),
    colors: (colorsArr: string[], language: string) =>
      colorsArr.length ? `variants.attributes.color.${language}: "${colorsArr.join('", "')}"` : '',
    colorsKey: (language: string) => `variants.attributes.color.${language}`,
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
