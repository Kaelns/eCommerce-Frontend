import type { SxStyles } from '@/shared/types/types';

import { Stack, Select, MenuItem } from '@mui/material';

import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/enums';

import { TitleTypography } from '@/components/typography/TitleTypography';

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
  const handleChange = (/* event: SelectChangeEvent */): void => {
    // dispatchFilterState({ type: FilterStateEnum.SORT, payload: event.target.value });
  };

  return (
    <Stack direction="row" alignItems="baseline" gap={1}>
      <TitleTypography variant="subtitle1">Sort: </TitleTypography>
      <Select value={/* filterState.sort */ 'No sort'} onChange={handleChange} sx={sxStyles.select}>
        {Object.values(Sort).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
