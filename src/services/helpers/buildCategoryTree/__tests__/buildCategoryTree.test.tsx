import { ICategoriesObj } from '@/services/ECommerceInitApi.interface';
import {
  initCategories,
  initCategoriesObj,
  initCategoriesTree
} from '@/services/helpers/buildCategoryTree/__tests__/buildCategoryTree.mock';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';
import { ICategoryTreeNode } from '@/shared/types';
import { convertArrOfIdElemToIdObj } from '@/utils/convertArrOfIdElemToIdObj';
import { Category } from '@commercetools/platform-sdk';

describe('Build category tree', () => {
  it('must return right tree', () => {
    expect(buildCategoryTree(initCategories, initCategoriesObj)).toStrictEqual(initCategoriesTree);
  });

  it('must return right small kitchen tree', () => {
    const kitchenId = '5667aecb-b311-4a42-b358-aedc802a28a7';
    const servewareOfKitchenId = 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719';
    const dinnerwareOfKitchenId = 'ef20021b-1101-45d6-be8d-e312173ea093';
    const platesOfDinnerwareId = 'd1ab0fd1-a2d4-4b10-bdfa-261bd74346d9';

    const categories: Category[] = [kitchenId, servewareOfKitchenId, dinnerwareOfKitchenId, platesOfDinnerwareId].map(
      (id) => initCategoriesObj[id]
    );
    const categoriesObj: ICategoriesObj = convertArrOfIdElemToIdObj(categories);
    const categoriesTree: ICategoryTreeNode[] = [
      {
        id: '5667aecb-b311-4a42-b358-aedc802a28a7',
        key: 'kitchen',
        children: [
          {
            id: 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719',
            key: 'serveware',
            children: []
          },
          {
            id: 'ef20021b-1101-45d6-be8d-e312173ea093',
            key: 'dinnerware',
            children: [
              {
                id: 'd1ab0fd1-a2d4-4b10-bdfa-261bd74346d9',
                key: 'plates',
                children: []
              }
            ]
          }
        ]
      }
    ];
    expect(buildCategoryTree(categories, categoriesObj)).toStrictEqual(categoriesTree);
  });

  it('must return empty array', () => {
    expect(buildCategoryTree([], {}).length).toEqual(0);
  });

  // TODO add check on categories amount
});
