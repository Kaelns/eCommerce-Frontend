import { BreadcrumbsProps } from '@mui/material';
import { ITreeNode } from '@/data/interface/ITreeNode';

export interface IBreadcrumbProps extends BreadcrumbsProps {
  categoryTree: ITreeNode[];
}
