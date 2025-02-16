import type { TreeNode } from '@/shared/types/types';
import type { ReduxElemIdData } from '@/features/accordion-tree/types';

import { memo } from 'react';

// eslint-disable-next-line import/no-cycle
import { AccordionItem } from '@/features/accordion-tree/AccordionItem';

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
