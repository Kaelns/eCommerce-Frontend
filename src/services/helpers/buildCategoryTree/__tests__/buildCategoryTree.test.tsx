import {
  initialCategories,
  categoriesTree
} from '@/services/helpers/buildCategoryTree/__tests__/buildCategoryTree.mock';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';

describe('Build category tree', () => {
  it('must return right tree', () => {
    expect(buildCategoryTree(initialCategories)).toStrictEqual(categoriesTree);
  });

  it('must return empty array', () => {
    expect(buildCategoryTree([]).length).toEqual(0);
  });
});
