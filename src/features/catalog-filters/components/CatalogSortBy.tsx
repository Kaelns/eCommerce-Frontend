import type { SxStyles } from '@/shared/model/types';
import type { SelectChangeEvent } from '@mui/material';

import { Stack, Select, MenuItem } from '@mui/material';

import { FiltersSort } from '@/features/catalog-filters/model/constants';
import { selectSort, setSortAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { TitleTypography } from '@/shared/ui/elements';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  select: {
    minWidth: { zero: 180, tablet: 250 },

    '& > fieldset': {
      border: 0
    },

    '& > div': {
      p: 0.25
    }
  }
};

export function CatalogSortBy() {
  const dispatch = useAppDispatch();

  const sort = useAppSelector(selectSort);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(setSortAction({ sort: event.target.value as FiltersSort }));
  };

  return (
    <Stack direction="row" alignItems="baseline" gap={1}>
      <TitleTypography variant="subtitle1">Sort: </TitleTypography>
      <Select value={sort} onChange={handleChange} sx={sxStyles.select}>
        {Object.values(FiltersSort).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
