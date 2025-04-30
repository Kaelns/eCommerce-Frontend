import type { CategoriesObj } from '@/shared/model/types';

import { ProductConsts } from '@/entities/product';

export const convertToBreadcrumbCategories = (elementId: string, categoriesObj: CategoriesObj | undefined): string[] => {
  if (!elementId || elementId === ProductConsts.NO_CATEGORY || !categoriesObj || !categoriesObj[elementId]) {
    return [ProductConsts.NO_CATEGORY];
  }

  const ancestors = categoriesObj[elementId].ancestors;
  const ancestorsIds = ancestors.map(({ id }) => id);
  ancestorsIds.push(elementId);
  return ancestorsIds;
};
