import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useContext } from 'react';
import { Stack, StackProps } from '@mui/system';
import { Filters, filtersOrder } from '@/features/FilterForm/FilterForm.constants';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { AccordionTree } from '@/features/FilterForm/components/AccordionTree';
import { RangePriceSlider } from '@/features/FilterForm/components/RangePriceSlider';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { BtnContained } from '@/components/buttons/BtnContained';
import { ColorFilter } from '@/features/FilterForm/components/ColorFilter';

export function FilterForm({ ...props }: StackProps): React.ReactNode {
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
      {filtersOrder.map((key) => (
        <Accordion key={key} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <TypographyBold>{key}</TypographyBold>
          </AccordionSummary>
          <AccordionDetails>{filters[key]}</AccordionDetails>
        </Accordion>
      ))}
      <BtnContained onClick={handleClear}>Clear</BtnContained>
    </Stack>
  );
}
