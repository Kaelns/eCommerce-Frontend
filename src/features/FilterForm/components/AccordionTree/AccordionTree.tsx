import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@mui/material';
import { useContext } from 'react';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { IAccordionTreeProps } from '@/features/FilterForm/components/AccordionTree/AccordionTree.interface';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

import styles from './AccordionTree.module.scss';

export function AccordionTree({ treeData }: IAccordionTreeProps): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  return (
    <>
      {treeData.map(({ id, key, children }) => {
        const isHasChildren = Boolean(children.length);
        const btnClasses = `${styles.btn} ${!isHasChildren ? styles.pointerEventsOn : ''}`;
        const accordionClasses = `${filterState.categoryKey === key ? styles.accordionActive : ''} ${!isHasChildren ? styles.pointerEventsOff : ''}`;

        const handleClickedCategory =
          (keyOfCategory: string) =>
          (e: React.MouseEvent<HTMLButtonElement>): void => {
            e.stopPropagation();
            dispatchFilterState({ type: FilterState.CATEGORY_TOGGLE, payload: keyOfCategory });
          };

        return (
          <Accordion key={id} className={accordionClasses}>
            <AccordionSummary expandIcon={isHasChildren ? <ExpandMoreIcon /> : ''}>
              <Button onClick={handleClickedCategory(key)} className={btnClasses}>
                {fromKeyToName(key)}
              </Button>
            </AccordionSummary>
            {isHasChildren ? (
              <AccordionDetails>
                <Box className={styles.subAccordionWrapper}>
                  <AccordionTree treeData={children} />
                </Box>
              </AccordionDetails>
            ) : (
              ''
            )}
          </Accordion>
        );
      })}
    </>
  );
}
