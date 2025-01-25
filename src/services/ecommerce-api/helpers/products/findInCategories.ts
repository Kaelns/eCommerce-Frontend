import type { Category } from '@commercetools/platform-sdk';

export const findInCategories = (categories: Category[], arrOfId: string[], isId?: boolean): Category[] => {
  // TODO change on categoriesObj
  const filteredId = new Set(arrOfId);
  return categories.filter((obj) => (isId ? filteredId.has(obj.id) : filteredId.has(obj.key ?? '')));
};
