import { Category } from '@commercetools/platform-sdk';
import { ICategoryTreeNode } from '@/shared/types';

export interface IAddress {
  country: string;
  postalCode: string;
  city: string;
  streetName: string;
}

export interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  addresses: IAddress[];
  shippingAddresses: number[];
  billingAddresses?: number[];
  defaultBillingAddress?: number;
  defaultShippingAddress?: number;
}

export type ICategoriesObj = Record<Category['id'], Category>;
export interface ICategories {
  categoriesTree: ICategoryTreeNode[];
  categoriesObj: ICategoriesObj;
  categories: Category[];
}
