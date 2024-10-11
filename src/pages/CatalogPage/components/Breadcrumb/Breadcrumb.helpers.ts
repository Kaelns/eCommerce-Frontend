import type { ICategoryTreeNode } from '@/shared/types';

export const convertToBreadcrumb = (categoryKey: string, categories: ICategoryTreeNode[]): string[] => {
  let breadcrumbsFinal = '';
  let breadcrumbs = '';
  let i = 0;

  const recursiveBreadcrumbBuilder = (categoriesRecursive: ICategoryTreeNode[]): void => {
    for (const { key, children } of categoriesRecursive) {
      if (key === categoryKey) {
        breadcrumbs += ` ${categoryKey}`;
        breadcrumbsFinal = breadcrumbs;
      }

      if (!breadcrumbsFinal && children.length) {
        breadcrumbs += ` ${key}`;
        recursiveBreadcrumbBuilder(children);
      }

      if (!breadcrumbsFinal && i >= categoriesRecursive.length) {
        breadcrumbs = breadcrumbs.slice(0, breadcrumbs.lastIndexOf(' '));
        i = -1;
      }

      if (breadcrumbsFinal) {
        return;
      }

      i += 1;
    }
  };

  recursiveBreadcrumbBuilder(categories);

  return breadcrumbsFinal.trim().split(' ');
};
