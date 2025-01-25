import { buildCategoryTree } from '@/services/ecommerce-api/helpers/products/buildCategoryTree/buildCategoryTree';
import type { Categories, CategoriesObj } from '@/shared/types/types';
import type { Category } from '@commercetools/platform-sdk';

export function convertCategories(categories: Category[]): Categories {
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
