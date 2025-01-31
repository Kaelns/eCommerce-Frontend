import type { StackProps } from '@mui/system';

import { useContext } from 'react';
import { Stack } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { Filters, FILTERS_ORDER } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';
import { ColorFilter } from '@/pages/CatalogPage/features/CatalogFilterForm/components/ColorFilter';
import { RangePriceSlider } from '@/pages/CatalogPage/features/CatalogFilterForm/components/RangePriceSlider';

import { AccordionTree } from '@/features/accordion-tree/AccordionTree';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

import { ContainedBtn } from '@/components/buttons/ContainedBtn';
import { BoldTypography } from '@/components/typography/BoldTypography';

export function CatalogFilterForm({ ...props }: StackProps): React.ReactNode {
  const { dispatchFilterState } = useContext(FilterReducerContext);
  const { categoriesTree } = useContext(ECommerceContext);

  const filters = {
    [Filters.PRICE]: <RangePriceSlider />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: <AccordionTree treeData={categoriesTree} />
  };

  const handleClear = (): void => {
    dispatchFilterState({ type: FilterStateEnum.CLEAR_FORM });
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
