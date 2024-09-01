import { Select, MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { useContext } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState, Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { Title } from '@/components/typography/Title';
import { SxStyles } from '@/shared/types';

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

export function SortBy(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatchFilterState({ type: FilterState.SORT, payload: event.target.value });
  };

  return (
    <Stack direction="row" alignItems="baseline" gap={1}>
      <Title variant="subtitle1">Sort: </Title>
      <Select value={filterState.sort} onChange={handleChange} sx={sxStyles.select}>
        {Object.values(Sort).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
