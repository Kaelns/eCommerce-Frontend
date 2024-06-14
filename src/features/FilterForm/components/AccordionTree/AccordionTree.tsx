import { useCallback, useContext } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { IAccordionTreeProps } from '@/features/FilterForm/components/AccordionTree/AccordionTree.interface';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { AccordionItem } from '@/features/FilterForm/components/AccordionItem/AccordionItem';

export function AccordionTree({ treeData }: IAccordionTreeProps): React.ReactNode {
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
        <AccordionItem
          key={id}
          categoryKey={key}
          treeData={children}
          filterState={filterState}
          handleClickedCategory={handleClickedCategory}
        />
      ))}
    </>
  );
}
