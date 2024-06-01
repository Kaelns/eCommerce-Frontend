import { Category } from '@commercetools/platform-sdk';
import { ICategory } from '@/components/Breadcrumb/Breadcrumb.interface';
import { LANGUAGE } from '@/services/ECommerceInitApi.constants';

export const convertToBreadcrumb = (category: Category, categories: Category[]): ICategory[] => {
  const breadcrumbsArr = [];

  category.ancestors.forEach((ancestor) => {
    const { id } = ancestor;
    const { name } = categories.find((categoryObj) => categoryObj.id === id)!;
    const nameOfTargetLang = name[LANGUAGE];

    breadcrumbsArr.push({ id, name: nameOfTargetLang });
  });

  breadcrumbsArr.push({ id: category.id, name: category.name[LANGUAGE] });

  return breadcrumbsArr;
};
