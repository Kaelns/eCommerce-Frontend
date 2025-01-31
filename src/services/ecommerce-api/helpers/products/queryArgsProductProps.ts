import { FilterColorsValues } from '@/shared/types/types';

export const queryArgsProductProps = {
  filterQuery: {
    categoryId: (categoryId: string) => (categoryId ? `categories.id: "${categoryId}"` : ''),
    colors: (colorsArr: FilterColorsValues[]) => (colorsArr.length ? `variants.attributes.color-filter.key: "${colorsArr.join('", "')}"` : ''),
    priceRange: (minMoney: number, maxMoney: number) => `variants.price.centAmount:range (${minMoney} to ${maxMoney})`
  },
  sort: {
    nameAsc: (language: string) => `name.${language} asc`,
    nameDesc: (language: string) => `name.${language} desc`,
    priceAsc: 'price asc',
    priceDesc: 'price desc'
  }
} as const;
