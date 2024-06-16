import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Button, AccordionDetails, Box } from '@mui/material';
import { IAccordionItemProps } from '@/features/FilterForm/components/AccordionItem/AccordionItem.interface';
import { AccordionTree } from '@/features/FilterForm/components/AccordionTree/AccordionTree';
import { fromKeyToName } from '@/utils/fromKeyToName';

import styles from './AccordionItem.module.scss';

export function AccordionItem({
  treeData,
  filterState,
  categoryKey,
  handleClickedCategory
}: IAccordionItemProps): React.ReactNode {
  const isHasChildren = Boolean(treeData.length);
  const btnClasses = `${styles.btn} ${!isHasChildren ? styles.pointerEventsOn : ''}`;
  const accordionClasses = `${filterState.categoryKey === categoryKey ? styles.accordionActive : ''} ${!isHasChildren ? styles.pointerEventsOff : ''}`;

  return (
    <Accordion className={accordionClasses}>
      <AccordionSummary expandIcon={isHasChildren ? <ExpandMoreIcon /> : ''}>
        <Button onClick={handleClickedCategory(categoryKey)} className={btnClasses}>
          {fromKeyToName(categoryKey)}
        </Button>
      </AccordionSummary>
      {isHasChildren && (
        <AccordionDetails>
          <Box className={styles.subAccordionWrapper}>
            <AccordionTree treeData={treeData} />
          </Box>
        </AccordionDetails>
      )}
    </Accordion>
  );
}
