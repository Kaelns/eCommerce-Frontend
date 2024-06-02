import { BreadcrumbsProps } from '@mui/material';
import { ITreeNode } from '@/data/interface/ITreeNode';

export interface IBreadcrumbProps extends BreadcrumbsProps {
  categoryKey: string;
  categoryTree: ITreeNode[];
  setCategoryKey: React.Dispatch<React.SetStateAction<string>>;
}
