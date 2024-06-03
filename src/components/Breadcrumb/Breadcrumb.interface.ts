import { BreadcrumbsProps } from '@mui/material';
import { ITreeNode } from '@/data/interface/ITreeNode';
import { IFilterState, IAction } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export interface IBreadcrumbProps extends BreadcrumbsProps {
  categoryTree: ITreeNode[];
  filterReducerHook: [IFilterState, React.Dispatch<IAction>];
}
