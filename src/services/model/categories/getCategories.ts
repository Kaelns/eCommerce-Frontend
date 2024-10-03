import { eCommerceAPI } from '@/services/ECommerceAPI';
import { ICategoriesObj, ICategories } from '@/services/ECommerceInitApi.interface';
import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';

export const getCategories = async (): Promise<ICategories> => {
  const categories = await eCommerceAPI.getCategoryAll();
  // TODO remove in the future
  eCommerceAPI.categories = categories;
  const categoriesObj = categories.reduce<ICategoriesObj>((acc, category) => {
    acc[category.id] = category;
    return acc;
  }, {});
  const categoriesTree = buildCategoryTree(categories, categoriesObj);
  return { categories, categoriesObj, categoriesTree };
};
