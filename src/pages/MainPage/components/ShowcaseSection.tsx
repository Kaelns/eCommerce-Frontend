import { Grid, Stack } from '@mui/system';
import { Paper } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { LoadingFetch } from '@/components/LoadingFetch';
import { PageSkeleton } from '@/components/skeleton/PageSkeleton';
import { Paths } from '@/shared/data/constants';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard';
import type { SxStyles } from '@/shared/types/types';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { fetchCategoryProducts } from '@/pages/MainPage/MainPage.helpers';
import { convertKeyToName } from '@/utils/convert/convertKeyToName';
import { useFetch } from '@/hooks/useFetch/useFetch';

const sxStyles: SxStyles = {
  header: {
    p: 1.5,
    cursor: 'pointer',
    color: 'white',
    bgcolor: 'Alert.infoColor'
  },
  body: {
    px: 1.5,
    py: 3
  },
  productCardContainer: (theme) => ({
    [theme.breakpoints.down('laptop')]: {
      '&:nth-last-child(-n + 1)': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('tablet')]: {
      '&:nth-last-child(-n + 2)': {
        display: 'none'
      }
    }
  })
};

export function ShowcaseSection({ categoryKey }: { categoryKey: string }): React.ReactNode {
  const navigate = useNavigate();
  // FIXME
  const { dispatchFilterState } = useContext(FilterReducerContext);
  const { data = [], isLoading, error } = useFetch(fetchCategoryProducts, categoryKey);

  const setCategoryAndRedirect = (): void => {
    dispatchFilterState({ type: FilterState.CATEGORY, payload: categoryKey });
    navigate(Paths.CATALOG);
  };

  return (
    <Stack component="section" gap={2}>
      <Paper elevation={5} onClick={setCategoryAndRedirect} sx={sxStyles.header}>
        <BoldTypography>{convertKeyToName(categoryKey)}</BoldTypography>
      </Paper>
      <Paper sx={sxStyles.body}>
        <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton}>
          <Grid container spacing={2} columns={9}>
            {data.map((product) => (
              <Grid key={product.id} size={{ mobile: 'grow', tablet: 4.5, laptop: 3 }} sx={sxStyles.productCardContainer}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </LoadingFetch>
      </Paper>
    </Stack>
  );
}
