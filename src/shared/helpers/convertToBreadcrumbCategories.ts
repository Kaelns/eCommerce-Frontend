import type { CategoriesObj } from '@/shared/types/types';

import { NO_CATEGORY } from '@/shared/data/constants';

export const convertToBreadcrumbCategories = (elementId: string, categoriesObj: CategoriesObj | undefined): string[] => {
  if (!elementId || elementId === NO_CATEGORY || !categoriesObj || !categoriesObj[elementId]) {
    return [NO_CATEGORY];
  }

  const ancestors = categoriesObj[elementId].ancestors;
  const ancestorsIds = ancestors.map(({ id }) => id);
  ancestorsIds.push(elementId);
  return ancestorsIds;
};
