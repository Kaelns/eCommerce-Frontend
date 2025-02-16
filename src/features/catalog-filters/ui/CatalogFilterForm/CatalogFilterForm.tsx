import type { StackProps } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';

import { memo } from 'react';
import { Stack } from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { Filters, FILTERS_ORDER } from '@/features/catalog-filters/model/constants';
import { ColorFilter } from '@/features/catalog-filters/ui/CatalogFilterForm/components/ColorFilter/ColorFilter';
import { resetFormAction, applyFormFiltersAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';
import { CategoriesAccordionTreeFilter } from '@/features/catalog-filters/ui/CatalogFilterForm/components/CategoriesAccordionTreeFilter';
import { RangePriceSliderFilter } from '@/features/catalog-filters/ui/CatalogFilterForm/components/RangePriceSliderFilter/RangePriceSliderFilter';

import { ContainedBtn } from '@/components/buttons/ContainedBtn';
import { BoldTypography } from '@/components/typography/BoldTypography';

import { useAppDispatch } from '@/shared/redux/redux';

const sxStyles: SxStyles = {
  btnApply: {
    flex: 8
  },
  btnClear: {
    flex: 1
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

  const handleApplyFilters = (): void => {
    dispatch(applyFormFiltersAction());
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
      <Stack direction="row" gap={1}>
        <ContainedBtn onClick={handleApplyFilters} sx={sxStyles.btnApply}>
          Apply
        </ContainedBtn>
        <ContainedBtn onClick={handleClear} sx={sxStyles.btnClear}>
          <ClearIcon />
        </ContainedBtn>
      </Stack>
    </Stack>
  );
});
