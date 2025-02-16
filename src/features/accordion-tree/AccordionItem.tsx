import type { SxStyles, TreeNode } from '@/shared/types/types';
import type { ReduxElemIdData } from '@/features/accordion-tree/types';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { convertKeyToName } from '@/utils/strings/convertKeyToName';
// eslint-disable-next-line import/no-cycle
import { AccordionTree } from '@/features/accordion-tree/AccordionTree';

import { useAppSelector } from '@/shared/redux/redux';

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
  treeElem: TreeNode;
  reduxElemIdData: ReduxElemIdData;
}

export function AccordionItem({ treeElem: { id, key, children }, reduxElemIdData }: AccordionItemProps) {
  const isHasChildren = Boolean(children.length);
  const isSelectedElem = useAppSelector((state) => reduxElemIdData.isCurrentIdSelector(state, id));

  const deactivateIfNoChildren = !isHasChildren && sxStyles.pointerEventsOff;
  const removeParentDeactivation = !isHasChildren && sxStyles.pointerEventsOn;

  return (
    <Accordion sx={[sxStyles.accordionPadding, isSelectedElem && sxStyles.accordionActive, deactivateIfNoChildren]}>
      <AccordionSummary expandIcon={isHasChildren ? <ExpandMoreIcon /> : ''} sx={sxStyles.accordionPadding}>
        <Button component="span" onClick={reduxElemIdData.setClickedElemMemoized(id)} sx={[sxStyles.btn, removeParentDeactivation]}>
          {convertKeyToName(key)}
        </Button>
      </AccordionSummary>
      {isHasChildren && (
        <AccordionDetails sx={sxStyles.accordionPadding}>
          <Box sx={sxStyles.subAccordionWrapper}>
            <AccordionTree treeData={children} reduxElemIdData={reduxElemIdData} />
          </Box>
        </AccordionDetails>
      )}
    </Accordion>
  );
}
