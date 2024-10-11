import type { Category, ProductProjection } from '@commercetools/platform-sdk';
import type { ICategoryTreeNode } from '@/shared/types';

// * User interfaces
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

// * Product interfaces

export type ICategoriesObj = Record<Category['id'], Category>;
export interface IProductsResponce {
  products: ProductProjection[];
  amount: number;
}
export interface ICategories {
  categoriesTree: ICategoryTreeNode[];
  categoriesObj: ICategoriesObj;
  categories: Category[];
}
