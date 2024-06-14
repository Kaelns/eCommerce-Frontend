import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { useCallback, useContext } from 'react';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';
import { Colors } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { IColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.interface';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

import styles from './ColorFilter.module.scss';

export function ColorFilter(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const colorsNames = Object.keys(Colors) as (keyof typeof Colors)[];

  const toggleColor = (colorKey: keyof IColorsState) => (): void => {
    dispatchFilterState({ type: FilterState.COLOR, payload: colorKey });
  };

  const sxProp = useCallback(
    (colorKey: keyof typeof Colors): SxProps<Theme> => ({
      backgroundColor: Colors[colorKey],
      '&:hover': {
        backgroundColor: Colors[colorKey]
      }
    }),
    []
  );

  return (
    <Box>
      <Grid container spacing={2} columns={3}>
        {colorsNames.map((colorKey) => {
          const circleStyles = `${styles.colorBtn} ${filterState.color[colorKey] ? styles.active : ''}`;
          return (
            <Grid key={colorKey} item xs={1} className={styles.gridItem}>
              <BtnCasual className={styles.gridItem} onClick={toggleColor(colorKey)}>
                <Box className={circleStyles} sx={sxProp(colorKey)} />
                <Typography className={styles.text}>{colorKey}</Typography>
              </BtnCasual>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
