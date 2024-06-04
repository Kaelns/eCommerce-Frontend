import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { useContext } from 'react';
import { Filters } from '@/features/FilterForm/data/FilterForm.enum';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { ColorFilter } from '@/features/FilterForm/components/ColorFilter/ColorFilter';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { filtersOrder } from '@/features/FilterForm/data/FilterForm.constants';
import { AccordionTree } from '@/features/FilterForm/components/AccordionTree/AccordionTree';
import { IFilterFormProps } from '@/features/FilterForm/data/FilterForm.interface';
import { RangePriceSlider } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import ButtonCustom from '@/components/buttons/ButtonCustom/ButtonCustom';

import styles from './FilterForm.module.scss';

export function FilterForm({ className }: IFilterFormProps): React.ReactNode {
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
    <Box className={`${styles.filterForm} ${className}`}>
      {filtersOrder.map((key) => (
        <Accordion key={key} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <TextBold>{key}</TextBold>
          </AccordionSummary>
          <AccordionDetails>{filters[key]}</AccordionDetails>
        </Accordion>
      ))}
      <ButtonCustom onClick={handleClear}>Clear</ButtonCustom>
    </Box>
  );
}
