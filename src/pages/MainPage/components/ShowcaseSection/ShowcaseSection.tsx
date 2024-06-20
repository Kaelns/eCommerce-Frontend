import { Box, Grid, Paper } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { fetchCategoryProducts } from '@/pages/MainPage/helpers/fetchCategoryProducts';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { ProductCard } from '@/pages/CatalogPage/components/ProductCard/ProductCard';
import { ROUTES } from '@/features/Router/data/Router.enum';

import styles from './ShowcaseSection.module.scss';
import { TextBold } from '@/components/typography/TextBold/TextBold';

export function ShowcaseSection({ categoryKey }: { categoryKey: string }): React.ReactNode {
  const navigate = useNavigate();
  const { dispatchFilterState } = useContext(FilterReducerContext);
  const { data = [], isLoading, error } = useFetch(fetchCategoryProducts, categoryKey);

  const setCategoryEndRedirect = (): void => {
    dispatchFilterState({ type: FilterState.CATEGORY, payload: categoryKey });
    navigate(ROUTES.CATALOG);
  };

  return (
    <Box component="section" className={styles.mainSection}>
      <Paper className={`${styles.btn} ${styles.paper}`} elevation={5} onClick={setCategoryEndRedirect}>
        <TextBold>{fromKeyToName(categoryKey)}</TextBold>
      </Paper>
      <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton}>
        <Paper className={`${styles.paper} ${styles.paperProducts}`}>
          <Grid container spacing={2} columns={9}>
            {data.map((product) => (
              <Grid key={product.id} item xs={9} sm={4.5} md={3} className={styles.product}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </LoadingFetch>
    </Box>
  );
}
