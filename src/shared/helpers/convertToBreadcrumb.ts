import type { TreeNode } from '@/shared/types/types';

export const convertToBreadcrumb = (elementId: string, elementsTree: TreeNode[]): string[] => {
  let breadcrumbsFinal = '';
  let breadcrumbs = '';
  let i = 0;

  const recursiveBreadcrumbBuilder = (categoriesRecursive: TreeNode[]): void => {
    for (const { id, children } of categoriesRecursive) {
      if (id === elementId) {
        breadcrumbs += ` ${elementId}`;
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

  recursiveBreadcrumbBuilder(elementsTree);

  return breadcrumbsFinal.trim().split(' ');
};
