import { Category } from '@commercetools/platform-sdk';
import { ITreeNode } from '@/data/interface/ITreeNode';

// * It is assumed that the array of categories is sorted by the number of ancestors

export function buildCategoryTree(categories: Category[]): ITreeNode[] {
  const finalArr: ITreeNode[] = [];
  let workArr = finalArr;

  categories.forEach((category) => {
    const [id, key] = [category.id, category.key!];
    const parentsCount = category.ancestors.length;
    const newObjCategory = {
      id,
      key,
      children: []
    };

    if (parentsCount) {
      category.ancestors.forEach((ancestor, count) => {
        const foundCategory = workArr.find((obj) => obj.id === ancestor.id);
        if (foundCategory) {
          workArr = foundCategory.children;
          return;
        }
        // todo key can be not for this category
        workArr.push(newObjCategory);

        if (parentsCount === count + 1) {
          workArr = finalArr;
        }
      });
    } else {
      workArr.push(newObjCategory);
    }
  });

  return finalArr;
}
