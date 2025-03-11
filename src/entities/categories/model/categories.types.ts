import type { TreeNode } from '@/shared/model/types';
import type { Category } from '@commercetools/platform-sdk';

export type CategoriesObj = Record<Category['id'], Category>;

export interface CategoriesCollection {
  categories: Category[];
  categoriesTree: TreeNode[];
  categoriesObj: CategoriesObj;
}
