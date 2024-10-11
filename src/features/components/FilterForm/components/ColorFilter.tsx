import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { Grid } from '@mui/system';
import { BtnCasual } from '@/components/buttons/BtnCasual';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import type { SxPropsObj, SxStyles } from '@/shared/types';
import { FilterColors } from '@/features/components/FilterForm/FilterForm.constants';
import type { IFilterColorsKeys } from '@/features/components/FilterForm/FilterForm.types';

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

const colorBtnBgcolor = (colorKey: IFilterColorsKeys): SxPropsObj => ({
  bgcolor: FilterColors[colorKey],
  color: FilterColors[colorKey],
  '&:hover': {
    bgcolor: FilterColors[colorKey]
  }
});

export function ColorFilter(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const colorsNames = Object.keys(FilterColors) as IFilterColorsKeys[];

  const toggleColor = (colorKey: IFilterColorsKeys) => (): void => {
    dispatchFilterState({ type: FilterState.COLOR, payload: colorKey });
  };

  return (
    <Grid container spacing={2} columns={3}>
      {colorsNames.map((colorKey) => (
        <Grid key={colorKey} component={BtnCasual} size={1} sx={sxStyles.gridItem} onClick={toggleColor(colorKey)}>
          <Box
            sx={[
              sxStyles.colorBtn,
              colorBtnBgcolor(colorKey),
              !!filterState.color[colorKey] && sxStyles.colorBtnActive
            ]}
          />
          <Typography variant="caption" sx={sxStyles.text}>
            {colorKey}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
