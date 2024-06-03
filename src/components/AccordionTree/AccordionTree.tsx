import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@mui/material';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { IAccordionTreeProps } from '@/components/AccordionTree/AccordionTree.interface';

import styles from './AccordionTree.module.scss';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

export function AccordionTree({ treeData, filterReducerHook }: IAccordionTreeProps): React.ReactNode {
  const [state, dispatch] = filterReducerHook;
  return (
    <>
      {treeData.map(({ id, key, children }) => {
        const isHasChildren = Boolean(children.length);
        const btnClasses = `${styles.btn} ${!isHasChildren ? styles.pointerEventsOn : ''}`;
        const accordionClasses = `${state.categoryKey === key ? styles.accordionActive : ''} ${!isHasChildren ? styles.pointerEventsOff : ''}`;

        const handleClickedCategory =
          (keyOfCategory: string) =>
          (e: React.MouseEvent<HTMLButtonElement>): void => {
            e.stopPropagation();
            dispatch({ type: FilterState.CATEGORY_TOGGLE, payload: keyOfCategory });
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
                  <AccordionTree treeData={children} filterReducerHook={filterReducerHook} />
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
