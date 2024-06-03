import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { AccordionTree } from '@/features/FilterForm/components/AccordionTree/AccordionTree';
import { Filters } from '@/features/FilterForm/data/FilterForm.enum';
import { IFilterFormProps } from '@/features/FilterForm/data/FilterForm.interface';
import { RangePriceSlider } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider';
import { TextBold } from '@/components/TextBold/TextBold';
import { filtersOrder } from '@/features/FilterForm/data/FilterForm.constants';
import { ColorFilter } from '@/features/FilterForm/components/ColorFilter/ColorFilter';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export function FilterForm({ className }: IFilterFormProps): React.ReactNode {
  const filters = {
    [Filters.PRICE]: <RangePriceSlider />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: <AccordionTree treeData={eCommerceAPI.categoriesTree} />
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
