import { eCommerceAPI } from '@/services/ECommerceAPI';
import { CategoriesObj, ICategories } from '@/services/ECommerceInitApi.interface';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';

export const getCategories = async (): Promise<ICategories> => {
  const categories = await eCommerceAPI.getCategoryAll();
  const categoriesObj = categories.reduce<CategoriesObj>((acc, category) => {
    acc[category.id] = category;
    return acc;
  }, {});
  const categoriesTree = buildCategoryTree(categories, categoriesObj);
  return { categories, categoriesObj, categoriesTree };
};
