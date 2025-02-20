import type { SelectChangeEvent } from '@mui/material';
import type { SxStyles } from '@/shared/model/types/types';

import { Stack, Select, MenuItem } from '@mui/material';

import { selectLanguage } from '@/entities/user';

import { FiltersSort } from '@/features/catalog-filters/model/constants';
import { selectSort, setSortAction } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

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
  const language = useAppSelector(selectLanguage);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(setSortAction({ sort: event.target.value as FiltersSort, language }));
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
