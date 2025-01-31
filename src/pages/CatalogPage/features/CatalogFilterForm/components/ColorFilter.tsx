import type { SxStyles, SxPropsObj } from '@/shared/types/types';
import type { FilterColorsKeys } from '@/pages/CatalogPage/features/CatalogFilterForm/types';

import { useContext } from 'react';
import { Grid } from '@mui/system';
import { Box, Typography } from '@mui/material';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { FILTER_COLORS } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';

import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

import { CasualBtn } from '@/components/buttons/CasualBtn';

const sxStyles: SxStyles = {
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    color: 'text.primary'
  },
  colorBtn: {
    borderRadius: '100%',
    p: 1.8,
    outline: '2.5px solid #e0e0e0',
    border: '1px solid white'
  },
  colorBtnActive: {
    outlineColor: 'primary.main'
  },
  text: {
    fontWeight: 500
  }
};

const colorBtnBgcolor = (colorKey: FilterColorsKeys): SxPropsObj => ({
  bgcolor: FILTER_COLORS[colorKey],
  color: FILTER_COLORS[colorKey],
  '&:hover': {
    bgcolor: FILTER_COLORS[colorKey]
  }
});

export function ColorFilter(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const colorsNames = Object.keys(FILTER_COLORS) as FilterColorsKeys[];

  const toggleColor = (colorKey: FilterColorsKeys) => (): void => {
    dispatchFilterState({ type: FilterStateEnum.COLOR, payload: colorKey });
  };

  return (
    <Grid container spacing={2} columns={3}>
      {colorsNames.map((colorKey) => (
        <Grid key={colorKey} component={CasualBtn} size={1} sx={sxStyles.gridItem} onClick={toggleColor(colorKey)}>
          <Box sx={[sxStyles.colorBtn, colorBtnBgcolor(colorKey), !!filterState.color[colorKey] && sxStyles.colorBtnActive]} />
          <Typography variant="caption" sx={sxStyles.text}>
            {colorKey}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
