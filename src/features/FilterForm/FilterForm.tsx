import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { IFilterFormProps } from '@/features/FilterForm/data/FilterForm.interface';
import { RangePriceSlider } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider';
import { Filters } from '@/features/FilterForm/data/FilterForm.enum';
import { filtersOrder } from '@/features/FilterForm/data/FilterForm.constants';
import { Price } from '@/features/FilterForm/data/FilterForm.type';
import { TextBold } from '@/components/TextBold/TextBold';

const MIN = 0;
const MAX = 10000;

export function FilterForm({ className }: IFilterFormProps): React.ReactNode {
  const [price, setPrice] = useState<Price>([MIN, MAX]);

  const filters = {
    [Filters.PRICE]: <RangePriceSlider price={price} setPrice={setPrice} min={MIN} max={MAX} />,
    [Filters.COLOR]: <Typography>KEsf</Typography>,
    [Filters.CATEGORY]: <Typography>KEsf</Typography>,
    [Filters.DISCOUNT]: <Typography>KEsf</Typography>
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
