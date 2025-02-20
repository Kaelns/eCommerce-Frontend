import type { CategoriesObj } from '@/shared/model/types/types';

import { LANGUAGE } from '@/shared/api/ecommerce-api';
import { NO_CATEGORY_NAME } from '@/shared/model/data/constants';

export function getCategoryName(categoriesObj: CategoriesObj | undefined, categoryId: string, language = LANGUAGE): string {
  return categoriesObj?.[categoryId]?.name[language] ?? NO_CATEGORY_NAME;
}
