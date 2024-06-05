import { Category } from '@commercetools/platform-sdk';

export const findInCategories = (categories: Category[], arrOfId: string[], isId?: boolean): Category[] => {
  const filteredId = Array.from(new Set(arrOfId));
  return categories.filter((obj) => (isId ? filteredId.includes(obj.id) : filteredId.includes(obj.key ?? '')));
};
