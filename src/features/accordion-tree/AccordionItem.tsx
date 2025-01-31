import type { SxStyles, CategoryTreeNode } from '@/shared/types/types';
import type { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/types';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { convertKeyToName } from '@/utils/strings/convertKeyToName';
// eslint-disable-next-line import/no-cycle
import { AccordionTree } from '@/features/accordion-tree/AccordionTree';

const sxStyles: SxStyles = {
  accordionActive: {
    bgcolor: 'var(--color-primary-transparent)'
  },
  accordionPadding: {
    px: 0.25
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
    textTransform: 'none',
    width: 1
  },
  pointerEventsOff: {
    pointerEvents: 'none'
  },
  pointerEventsOn: {
    pointerEvents: 'all'
  },
  subAccordionWrapper: {
    pl: 0.2
  }
};

interface AccordionItemProps {
  categoryKey: string;
  filterState: FilterState;
  treeData: CategoryTreeNode[];
  handleClickedCategory: (keyOfCategory: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AccordionItem({ categoryKey, filterState, handleClickedCategory, treeData }: AccordionItemProps): React.ReactNode {
  const isHasChildren = Boolean(treeData.length);
  const deactivateIfNoChildren = !isHasChildren && sxStyles.pointerEventsOff;
  const removeParentDeactivation = !isHasChildren && sxStyles.pointerEventsOn;

  return (
    <Accordion sx={[sxStyles.accordionPadding, filterState.categoryKey === categoryKey && sxStyles.accordionActive, deactivateIfNoChildren]}>
      <AccordionSummary expandIcon={isHasChildren ? <ExpandMoreIcon /> : ''} sx={sxStyles.accordionPadding}>
        <Button onClick={handleClickedCategory(categoryKey)} sx={[sxStyles.btn, removeParentDeactivation]}>
          {convertKeyToName(categoryKey)}
        </Button>
      </AccordionSummary>
      {isHasChildren && (
        <AccordionDetails sx={sxStyles.accordionPadding}>
          <Box sx={sxStyles.subAccordionWrapper}>
            <AccordionTree treeData={treeData} />
          </Box>
        </AccordionDetails>
      )}
    </Accordion>
  );
}
