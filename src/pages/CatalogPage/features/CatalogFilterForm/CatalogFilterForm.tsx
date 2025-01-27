import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useContext } from 'react';
import type { StackProps } from '@mui/system';
import { Stack } from '@mui/system';
import { Filters, FILTERS_ORDER } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { AccordionTree } from '@/features/accordion-tree/AccordionTree';
import { RangePriceSlider } from '@/pages/CatalogPage/features/CatalogFilterForm/components/RangePriceSlider';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { ContainedBtn } from '@/components/buttons/ContainedBtn';
import { ColorFilter } from '@/pages/CatalogPage/features/CatalogFilterForm/components/ColorFilter';

export function CatalogFilterForm({ ...props }: StackProps): React.ReactNode {
  const { dispatchFilterState } = useContext(FilterReducerContext);
  const { categoriesTree } = useContext(ECommerceContext);

  const filters = {
    [Filters.PRICE]: <RangePriceSlider />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: <AccordionTree treeData={categoriesTree} />
  };

  const handleClear = (): void => {
    dispatchFilterState({ type: FilterState.CLEAR_FORM });
  };

  return (
    <Stack gap={1.5} {...props}>
      {FILTERS_ORDER.map((key) => (
        <Accordion key={key} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <BoldTypography>{key}</BoldTypography>
          </AccordionSummary>
          <AccordionDetails>{filters[key]}</AccordionDetails>
        </Accordion>
      ))}
      <ContainedBtn onClick={handleClear}>Clear</ContainedBtn>
    </Stack>
  );
}
