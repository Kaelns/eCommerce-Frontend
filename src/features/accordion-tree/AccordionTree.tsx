import type { CategoryTreeNode } from '@/shared/types/types';

import { memo, useContext, useCallback } from 'react';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';

// eslint-disable-next-line import/no-cycle
import { AccordionItem } from '@/features/accordion-tree/AccordionItem';

interface AccordionTreeProps {
  treeData: CategoryTreeNode[];
}

// FIXME fix this tree
export const AccordionTree = memo(function AccordionTree({ treeData }: AccordionTreeProps) {
  // const handleClickedCategory = useCallback(
  //   (keyOfCategory: string) =>
  //     (e: React.MouseEvent<HTMLButtonElement>): void => {
  //       e.stopPropagation();
  //       dispatchFilterState({ type: FilterStateEnum.CATEGORY_TOGGLE, payload: keyOfCategory });
  //     },
  //   [dispatchFilterState]
  // );

  return (
    <>
      {/* {treeData.map(({ id, key, children }) => (
        // FIXME filterState causes massive rerenders
        <AccordionItem key={id} categoryKey={key} treeData={children} filterState={filterState} handleClickedCategory={handleClickedCategory} />
      ))} */}
    </>
  );
});
