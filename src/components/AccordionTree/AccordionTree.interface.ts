import { ITreeNode } from '@/data/interface/ITreeNode';

export interface IAccordionTreeProps {
  treeData: ITreeNode[];
  categoryKey: string;
  setCategoryKey: React.Dispatch<React.SetStateAction<string>>;
}
