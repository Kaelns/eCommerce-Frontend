import { ICategoriesObj } from '@/context/ECommerceContext/ECommerceContext.interface';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export const fetchCategories = async (): Promise<ICategoriesObj> => eCommerceAPI.getCategoryAll();
