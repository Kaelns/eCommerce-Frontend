import { Category } from '@commercetools/platform-sdk';

export const findInCategories = (categories: Category[], arrOfId: string[]): Category[] => {
  const filteredId = Array.from(new Set(arrOfId));
  return categories.filter((obj) => filteredId.includes(obj.id ?? ''));
};
