import type { StackProps } from '@mui/system';

import { memo } from 'react';
import { Stack } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { Filters, FILTERS_ORDER } from '@/pages/CatalogPage/features/catalog-filters/data/constants';
import { resetFiltersAction } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';
import { ColorFilter } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogFilterForm/components/ColorFilter';
import { RangePriceSlider } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogFilterForm/components/RangePriceSlider';
import { CategoriesAccordionTree } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogFilterForm/components/CategoriesAccordionTree';

import { ContainedBtn } from '@/components/buttons/ContainedBtn';
import { BoldTypography } from '@/components/typography/BoldTypography';

import { useAppDispatch } from '@/shared/redux/redux';

export const CatalogFilterForm = memo(function CatalogFilterForm({ ...props }: StackProps) {
  const dispatch = useAppDispatch();

  const filters = {
    [Filters.PRICE]: <RangePriceSlider />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: <CategoriesAccordionTree />
  };

  const handleClear = (): void => {
    dispatch(resetFiltersAction());
  };

  const handleApplyFilters = (): void => {
    // TODO
    // dispatch(applyFiltersAction());
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
      <ContainedBtn onClick={handleApplyFilters}>Apply</ContainedBtn>
    </Stack>
  );
});
