import type { CategoryTreeNode } from '@/shared/types/types';

export const convertToBreadcrumb = (categoryId: string, categoriesTree: CategoryTreeNode[]): string[] => {
  let breadcrumbsFinal = '';
  let breadcrumbs = '';
  let i = 0;

  const recursiveBreadcrumbBuilder = (categoriesRecursive: CategoryTreeNode[]): void => {
    for (const { id, children } of categoriesRecursive) {
      if (id === categoryId) {
        breadcrumbs += ` ${categoryId}`;
        breadcrumbsFinal = breadcrumbs;
      }

      if (!breadcrumbsFinal && children.length) {
        breadcrumbs += ` ${id}`;
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

  recursiveBreadcrumbBuilder(categoriesTree);

  return breadcrumbsFinal.trim().split(' ');
};
