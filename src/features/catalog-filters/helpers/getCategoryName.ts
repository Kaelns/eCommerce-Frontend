import type { CategoriesObj } from '@/shared/types/types';

import { LANGUAGE } from '@/services/ecommerce-api';

import { NO_CATEGORY_NAME } from '@/shared/data/constants';

export function getCategoryName(categoriesObj: CategoriesObj | undefined, categoryId: string, language = LANGUAGE): string {
  return categoriesObj?.[categoryId]?.name[language] ?? NO_CATEGORY_NAME;
}
