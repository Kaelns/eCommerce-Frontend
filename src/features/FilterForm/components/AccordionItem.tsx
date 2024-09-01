import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Button, AccordionDetails, Box } from '@mui/material';
import { AccordionTree } from '@/features/FilterForm/components/AccordionTree';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { ICategoryTreeNode, SxStyles } from '@/shared/types';
import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

const sxStyles: SxStyles = {
  accordionPadding: {
    px: 0.25
  },
  accordionActive: {
    bgcolor: 'var(--color-primary-transparent)'
  },
  subAccordionWrapper: {
    pl: 0.2
  },
  pointerEventsOn: {
    pointerEvents: 'all'
  },
  pointerEventsOff: {
    pointerEvents: 'none'
  },
  btn: {
    width: 1,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left'
  }
};

interface IAccordionItemProps {
  categoryKey: string;
  treeData: ICategoryTreeNode[];
  filterState: IFilterState;
  handleClickedCategory: (keyOfCategory: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AccordionItem({
  treeData,
  filterState,
  categoryKey,
  handleClickedCategory
}: IAccordionItemProps): React.ReactNode {
  const isHasChildren = Boolean(treeData.length);
  const deactivateIfNoChildren = !isHasChildren && sxStyles.pointerEventsOff;
  const removeParentDeactivation = !isHasChildren && sxStyles.pointerEventsOn;

  return (
    <Accordion
      sx={[
        sxStyles.accordionPadding,
        filterState.categoryKey === categoryKey && sxStyles.accordionActive,
        deactivateIfNoChildren
      ]}
    >
      <AccordionSummary expandIcon={isHasChildren ? <ExpandMoreIcon /> : ''} sx={sxStyles.accordionPadding}>
        <Button onClick={handleClickedCategory(categoryKey)} sx={[sxStyles.btn, removeParentDeactivation]}>
          {fromKeyToName(categoryKey)}
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
