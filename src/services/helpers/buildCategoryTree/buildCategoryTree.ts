import { Category } from '@commercetools/platform-sdk';
import { ICategoryTreeNode } from '@/shared/types';
import { CategoriesObj } from '@/services/ECommerceInitApi.interface';

export function buildCategoryTree(categories: Category[], categoriesObj: CategoriesObj): ICategoryTreeNode[] {
  const rootArr: ICategoryTreeNode[] = [];
  let rootOrChildrenArr = rootArr;

  console.log(categories.length);

  if (!categories.length) {
    return rootArr;
  }

  categories.forEach((category) => {
    const [id, key] = [category.id, category.key!];
    const ancestorsCount = category.ancestors.length;
    const newObjCategory: ICategoryTreeNode = { id, key, children: [] };

    if (ancestorsCount) {
      category.ancestors.forEach((ancestor, i) => {
        const foundCategory = rootOrChildrenArr.find((categoryObj) => categoryObj.id === ancestor.id);
        if (foundCategory) {
          rootOrChildrenArr = foundCategory.children;
        }
        if (ancestorsCount === i + 1) {
          rootOrChildrenArr.push(newObjCategory);
          rootOrChildrenArr = rootArr;
        }
        if (!foundCategory && ancestorsCount !== i + 1) {
          const missedAncestor = categoriesObj[ancestor.id];
          rootOrChildrenArr.push({ id: missedAncestor.id, key: missedAncestor.key!, children: [] });
        }
      });
    } else {
      rootOrChildrenArr.push(newObjCategory);
    }
  });

  console.log(rootArr);

  return rootArr;
}
