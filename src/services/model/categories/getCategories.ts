// import type { ICategoriesObj, ICategories } from '@/services/interface';
// import { api } from '@/services/api/Api';
// import { buildCategoryTree } from '@/services/helpers/buildCategoryTree/buildCategoryTree';

// export const getCategories = async (): Promise<ICategories> => {
//   const categoriesObj = categories.reduce<ICategoriesObj>((acc, category) => {
//     acc[category.id] = category;
//     return acc;
//   }, {});
//   const categoriesTree = buildCategoryTree(categories, categoriesObj);
//   return { categories, categoriesObj, categoriesTree };
// };
