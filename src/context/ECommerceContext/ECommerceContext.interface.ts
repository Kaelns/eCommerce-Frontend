import { Category } from '@commercetools/platform-sdk';
import { ITreeNode } from '@/data/interface/ITreeNode';

export interface ICategoriesObj {
  categoriesTree: ITreeNode[];
  categories: Category[];
}
