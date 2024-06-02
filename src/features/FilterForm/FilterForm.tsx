import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { AccordionTree } from '@/components/AccordionTree/AccordionTree';
import { Filters } from '@/features/FilterForm/data/FilterForm.enum';
import { IFilterFormProps } from '@/features/FilterForm/data/FilterForm.interface';
import { Price } from '@/features/FilterForm/data/FilterForm.type';
import { RangePriceSlider } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider';
import { TextBold } from '@/components/TextBold/TextBold';
import { filtersOrder } from '@/features/FilterForm/data/FilterForm.constants';
import { ColorFilter } from '@/features/FilterForm/components/ColorFilter/ColorFilter';

// todo get max price
const MIN = 0;
const MAX = 10000;

export function FilterForm({
  className,
  categoryTree,
  categoryKey,
  setCategoryKey
}: IFilterFormProps): React.ReactNode {
  const [price, setPrice] = useState<Price>([MIN, MAX]);

  const filters = {
    [Filters.PRICE]: <RangePriceSlider price={price} setPrice={setPrice} min={MIN} max={MAX} />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: (
      <AccordionTree treeData={categoryTree} categoryKey={categoryKey} setCategoryKey={setCategoryKey} />
    )
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
