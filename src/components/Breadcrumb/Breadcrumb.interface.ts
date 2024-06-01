import { Category } from '@commercetools/platform-sdk';
import { BreadcrumbsProps } from '@mui/material';

export interface ICategory {
  id: string;
  name: string;
}

export interface IBreadcrumbProps extends BreadcrumbsProps {
  category: Category;
}
