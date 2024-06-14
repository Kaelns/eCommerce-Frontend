import { ITreeNode } from '@/data/interface/ITreeNode';
import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export interface IAccordionItemProps {
  categoryKey: string;
  treeData: ITreeNode[];
  filterState: IFilterState;
  handleClickedCategory: (keyOfCategory: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}
