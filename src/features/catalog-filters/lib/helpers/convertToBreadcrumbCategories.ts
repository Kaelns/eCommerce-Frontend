import { NO_CATEGORY_ID, type CategoriesObj } from '@/entities/categories';

export const convertToBreadcrumbCategories = (elementId: string, categoriesObj: CategoriesObj | undefined): string[] => {
  if (!elementId || elementId === NO_CATEGORY_ID || !categoriesObj || !categoriesObj[elementId]) {
    return [NO_CATEGORY_ID];
  }

  const ancestors = categoriesObj[elementId].ancestors;
  const ancestorsIds = ancestors.map(({ id }) => id);
  ancestorsIds.push(elementId);
  return ancestorsIds;
};
