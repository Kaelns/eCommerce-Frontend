import {
  categoriesMock,
  categoriesObjMock,
  categoriesTreeMock
} from '@/shared/__tests__/mocks/categories.mock';
import { Category } from '@commercetools/platform-sdk';
import { buildCategoryTree } from '@/services/ecommerce-api/helpers/products/buildCategoryTree/buildCategoryTree';
import { convertArrOfIdElemToIdObj } from '@/utils/arrays/convertArrOfIdElemToIdObj';
import { CategoriesObj, TreeNode } from '@/shared/types/types';

describe('buildCategoryTree', () => {
  it('must return right tree', () => {
    expect(buildCategoryTree(categoriesMock, categoriesObjMock)).toStrictEqual(categoriesTreeMock);
  });

  it('must return right small kitchen tree', () => {
    const kitchenId = '5667aecb-b311-4a42-b358-aedc802a28a7';
    const servewareOfKitchenId = 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719';
    const dinnerwareOfKitchenId = 'ef20021b-1101-45d6-be8d-e312173ea093';
    const platesOfDinnerwareId = 'd1ab0fd1-a2d4-4b10-bdfa-261bd74346d9';

    const categories: Category[] = [kitchenId, servewareOfKitchenId, dinnerwareOfKitchenId, platesOfDinnerwareId].map((id) => categoriesObjMock[id]);
    const categoriesObj: CategoriesObj = convertArrOfIdElemToIdObj(categories);
    const categoriesTree: TreeNode[] = [
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
