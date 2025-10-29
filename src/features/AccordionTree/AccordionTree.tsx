import type { TreeNode } from '@/shared/model/types';
import type { ReduxElemIdData } from '@/features/AccordionTree/types';

import { memo } from 'react';

// eslint-disable-next-line import/no-cycle
import { AccordionItem } from '@/features/AccordionTree/AccordionItem';

interface AccordionTreeProps {
  treeData: TreeNode[];
  reduxElemIdData: ReduxElemIdData;
}

export const AccordionTree = memo(function AccordionTree({ treeData, reduxElemIdData }: AccordionTreeProps) {
  return (
    <>
      {treeData.map((treeElem) => (
        <AccordionItem key={treeElem.id} treeElem={treeElem} reduxElemIdData={reduxElemIdData} />
      ))}
    </>
  );
});
