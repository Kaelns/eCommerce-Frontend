import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { useContext } from 'react';
import { Filters } from '@/features/FilterForm/data/FilterForm.enum';
import { AccordionTree } from '@/features/FilterForm/components/AccordionTree/AccordionTree';
import { IFilterFormProps } from '@/features/FilterForm/data/FilterForm.interface';
import { RangePriceSlider } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider';
import { filtersOrder } from '@/features/FilterForm/data/FilterForm.constants';
import { ColorFilter } from '@/features/FilterForm/components/ColorFilter/ColorFilter';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';

export function FilterForm({ className }: IFilterFormProps): React.ReactNode {
  const { categoriesTree } = useContext(ECommerceContext);

  const filters = {
    [Filters.PRICE]: <RangePriceSlider />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: <AccordionTree treeData={categoriesTree} />
  };

  return (
    <Box className={className}>
      {filtersOrder.map((key) => (
        <Accordion key={key} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <TextBold>{key}</TextBold>
          </AccordionSummary>
          <AccordionDetails>{filters[key]}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
