import { memo, useCallback, useContext } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { AccordionItem } from '@/features/accordion-tree/AccordionItem';
import type { CategoryTreeNode } from '@/shared/types/types';

interface AccordionTreeProps {
  treeData: CategoryTreeNode[];
}

// FIXME fix this tree
export const AccordionTree = memo(function AccordionTree({ treeData }: AccordionTreeProps): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const handleClickedCategory = useCallback(
    (keyOfCategory: string) =>
      (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        dispatchFilterState({ type: FilterState.CATEGORY_TOGGLE, payload: keyOfCategory });
      },
    [dispatchFilterState]
  );

  return (
    <>
      {treeData.map(({ id, key, children }) => (
        // FIXME filterState causes massive rerenders
        <AccordionItem key={id} categoryKey={key} treeData={children} filterState={filterState} handleClickedCategory={handleClickedCategory} />
      ))}
    </>
  );
});
