import { Category } from '@commercetools/platform-sdk';

export const findInCategories = (categories: Category[], arrOfId: string[]): Category[] =>
  categories.filter((obj) => arrOfId.includes(obj.key ?? ''));
