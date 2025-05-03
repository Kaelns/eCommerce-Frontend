import type { StackProps } from '@mui/system';
import type { SxStyles } from '@/shared/model/types';

import { memo } from 'react';
import { Stack } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Tooltip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { Filters, FILTERS_ORDER } from '@/features/catalog-filters/model/constants';
import { resetFormAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';
import { ApplyFiltersBtn } from '@/features/catalog-filters/components/CatalogFilterForm/ui/elements/ApplyFiltersBtn';
import { ColorFilter } from '@/features/catalog-filters/components/CatalogFilterForm/ui/components/ColorFilter/ColorFilter';
import { CategoriesAccordionTreeFilter } from '@/features/catalog-filters/components/CatalogFilterForm/ui/components/CategoriesAccordionTreeFilter';
import { RangePriceSliderFilter } from '@/features/catalog-filters/components/CatalogFilterForm/ui/components/RangePriceSliderFilter/RangePriceSliderFilter';

import { ContainedBtn, BoldTypography } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  btnApply: {
    flex: 8
  },
  btnClear: {
    flex: 1
  },
  btnContainer: {
    position: 'sticky',
    bottom: '1rem'
  }
};

export const CatalogFilterForm = memo(function CatalogFilterForm({ ...props }: StackProps) {
  const dispatch = useAppDispatch();

  const filters = {
    [Filters.PRICE]: <RangePriceSliderFilter />,
    [Filters.COLOR]: <ColorFilter />,
    [Filters.CATEGORY]: <CategoriesAccordionTreeFilter />
  };

  const handleClear = (): void => {
    dispatch(resetFormAction());
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
      <Stack direction="row" gap={1} sx={sxStyles.btnContainer}>
        <ApplyFiltersBtn sx={sxStyles.btnApply} />

        <Tooltip placement="top" title="Clear filters">
          <ContainedBtn onClick={handleClear} sx={sxStyles.btnClear}>
            <FilterAltOffIcon />
          </ContainedBtn>
        </Tooltip>
      </Stack>
    </Stack>
  );
});
