import type { Category } from '@commercetools/platform-sdk';
import type { TreeNode, CategoriesObj } from '@/shared/types/types';

export function buildCategoryTree(categories: Category[], categoriesObj: CategoriesObj): TreeNode[] {
  const rootArr: TreeNode[] = [];
  let rootOrChildrenArr = rootArr;

  if (!categories.length) {
    return rootArr;
  }

  categories.forEach((category) => {
    const [id, key] = [category.id, category.key!];
    const ancestorsCount = category.ancestors.length;
    const newObjCategory: TreeNode = { id, key, children: [] };

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

  return rootArr;
}
