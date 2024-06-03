import { ITreeNode } from '@/data/interface/ITreeNode';
import { IFilterState, IAction } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export interface IAccordionTreeProps {
  treeData: ITreeNode[];
  filterReducerHook: [IFilterState, React.Dispatch<IAction>];
}
