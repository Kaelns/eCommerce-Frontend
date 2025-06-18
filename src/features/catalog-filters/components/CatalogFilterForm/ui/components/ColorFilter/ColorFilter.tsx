import type { SxStylesObj } from '@/shared/model/types';

import { memo } from 'react';
import { Grid } from '@mui/system';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { selectLanguage } from '@/entities/user';
import { useGetProductColorsQuery } from '@/entities/product';

import { toggleColorFormAction } from '@/features/catalog-filters/model/catalogFilter.slice';
import { ColorBtn } from '@/features/catalog-filters/components/CatalogFilterForm/ui/components/ColorFilter/ColorBtn';

import { CasualBtn } from '@/shared/ui/elements';
import { SuspenseWithError } from '@/shared/ui/components';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxGridItem: SxStylesObj = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: 0.5,
  color: 'text.primary'
};

export const ColorFilter = memo(function ColorFilter() {
  const dispatch = useAppDispatch();

  const language = useAppSelector(selectLanguage);

  const { data: colors, isError, isLoading, error } = useGetProductColorsQuery(language);

  const toggleColor = (colorKey: string) => (): void => {
    dispatch(toggleColorFormAction({ colorKey }));
  };

  return (
    <SuspenseWithError isLoading={isLoading} isError={isError} error={getErrorMessage(error)}>
      <Grid container spacing={2} columns={3}>
        {!!colors &&
          Object.keys(colors).map((colorKey) => (
            <Grid key={colorKey} component={CasualBtn} size={1} sx={sxGridItem} onClick={toggleColor(colorKey)}>
              <ColorBtn colorKey={colorKey} colorHex={colors[colorKey].hex} />
            </Grid>
          ))}
      </Grid>
    </SuspenseWithError>
  );
});
