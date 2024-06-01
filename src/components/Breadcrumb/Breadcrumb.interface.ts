import { Category } from '@commercetools/platform-sdk';

export interface ICategory {
  id: string;
  name: string;
}

export interface IBreadcrumbProps {
  category: Category;
}
