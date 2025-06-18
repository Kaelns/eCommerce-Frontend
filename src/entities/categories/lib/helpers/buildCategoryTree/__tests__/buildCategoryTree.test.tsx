import { categoriesMock, categoriesObjMock, categoriesTreeMock } from '@/entities/categories/model/categories.mock';
import { Category } from '@commercetools/platform-sdk';
import { buildCategoryTree } from '@/entities/categories/lib/helpers/buildCategoryTree/buildCategoryTree';
import { convertArrOfIdElemToIdObj } from '@/shared/lib/utils/arrays/convertArrOfIdElemToIdObj';
import { TreeNode } from '@/shared/model/types';
import { CategoriesObj } from '@/entities/categories';

describe('buildCategoryTree', () => {
  it('must return right tree', () => {
    expect(buildCategoryTree(categoriesMock, categoriesObjMock)).toStrictEqual(categoriesTreeMock);
  });

  it('must return right small kitchen tree', () => {
    const kitchenId = '5667aecb-b311-4a42-b358-aedc802a28a7';
    const servewareOfKitchenId = 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719';
    const dinnerwareOfKitchenId = 'ef20021b-1101-45d6-be8d-e312173ea093';
    const platesOfDinnerwareId = 'd1ab0fd1-a2d4-4b10-bdfa-261bd74346d9';

    const categories: Category[] = [kitchenId, servewareOfKitchenId, dinnerwareOfKitchenId, platesOfDinnerwareId].map(
      (id) => categoriesObjMock[id]
    );
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
});
