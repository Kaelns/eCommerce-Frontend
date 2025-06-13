import type { Category } from '@commercetools/platform-sdk';
import type { CategoriesObj, CategoriesCollection } from '@/entities/categories/model/categories.types';

import { buildCategoryTree } from '@/entities/product/lib/helpers/objects/buildCategoryTree/buildCategoryTree';

export function convertCategories(categories: Category[]): CategoriesCollection {
  const categoriesObj = categories.reduce<CategoriesObj>((acc, category) => {
    acc[category.id] = category;
    return acc;
  }, {});
  return {
    categories,
    categoriesObj,
    categoriesTree: buildCategoryTree(categories, categoriesObj)
  };
}
