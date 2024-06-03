import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';
import { Colors } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { IColorFilterProps, IColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.interface';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

import styles from './ColorFilter.module.scss';

export function ColorFilter({ filterReducerHook }: IColorFilterProps): React.ReactNode {
  const [state, dispatch] = filterReducerHook;
  const colorsNames = Object.keys(Colors) as (keyof typeof Colors)[];

  const toggleColor = (colorKey: keyof IColorsState) => (): void => {
    dispatch({ type: FilterState.COLOR, payload: colorKey });
  };

  const sxProp = (colorKey: keyof typeof Colors): SxProps<Theme> => ({
    backgroundColor: Colors[colorKey as keyof typeof Colors],
    '&:hover': {
      backgroundColor: Colors[colorKey as keyof typeof Colors]
    }
  });

  return (
    <Box>
      <Grid container spacing={2} columns={3}>
        {colorsNames.map((colorKey) => {
          const circleStyles = `${styles.colorBtn} ${state.color[colorKey] ? styles.active : ''}`;
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
