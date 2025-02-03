import type { SxStyles, SxPropsObj, FilterColorsKeys } from '@/shared/types/types';

import { memo } from 'react';
import { Grid } from '@mui/system';
import { Typography } from '@mui/material';

import { FILTER_COLORS } from '@/pages/CatalogPage/features/CatalogFilterForm/data/constants';

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

export const ColorFilter = memo(function ColorFilter() {
  // const dispatch = useAppDispatch();

  const colorsNames = Object.keys(FILTER_COLORS) as FilterColorsKeys[];

  const toggleColor = (colorKey: FilterColorsKeys) => (): void => {
    // dispatchFilterState({ type: FilterStateEnum.COLOR, payload: colorKey });
  };

  return (
    <Grid container spacing={2} columns={3}>
      {colorsNames.map((colorKey) => (
        <Grid key={colorKey} component={CasualBtn} size={1} sx={sxStyles.gridItem} onClick={toggleColor(colorKey)}>
          {/* <Box sx={[sxStyles.colorBtn, colorBtnBgcolor(colorKey), !!filterState.color[colorKey] && sxStyles.colorBtnActive]} /> */}
          <Typography variant="caption" sx={sxStyles.text}>
            {colorKey}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
});
