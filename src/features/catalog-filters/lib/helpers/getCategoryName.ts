import { LANGUAGE } from '@/shared/api/ecommerce-api';

import { NO_CATEGORY_NAME, type CategoriesObj } from '@/entities/categories';

export function getCategoryName(categoriesObj: CategoriesObj | undefined, categoryId: string, language = LANGUAGE): string {
  return categoriesObj?.[categoryId]?.name[language] ?? NO_CATEGORY_NAME;
}
