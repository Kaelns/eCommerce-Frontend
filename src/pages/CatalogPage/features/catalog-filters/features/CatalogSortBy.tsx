import type { SxStyles } from '@/shared/types/types';
import type { SelectChangeEvent } from '@mui/material';

import { Stack, Select, MenuItem } from '@mui/material';

import { Sort } from '@/pages/CatalogPage/features/catalog-filters/data/constants';
import { selectSort, setSortAction } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';

import { TitleTypography } from '@/components/typography/TitleTypography';

import { useAppDispatch, useAppSelector } from '@/shared/redux/redux';

const sxStyles: SxStyles = {
  select: {
    minWidth: { zero: 180, tablet: 250 },

    '& > fieldset': {
      border: 0
    },

    '& > div': {
      p: 0.5
    }
  }
};

export function CatalogSortBy() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(setSortAction(event.target.value as Sort));
  };

  return (
    <Stack direction="row" alignItems="baseline" gap={1}>
      <TitleTypography variant="subtitle1">Sort: </TitleTypography>
      <Select value={sort} onChange={handleChange} sx={sxStyles.select}>
        {Object.values(Sort).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
