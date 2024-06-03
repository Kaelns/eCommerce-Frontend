import { Box, Grid } from '@mui/material';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { fetchProducts } from '@/services/helpers/fetchProducts';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { Title } from '@/components/Title/Title';
import { IProductsProps } from '@/pages/CatalogPage/components/Products/Products.interface';

import styles from './Products.module.scss';

export function Products({ className }: IProductsProps): React.ReactNode {
  const { data, isLoading, error } = useFetch(fetchProducts);

  // const createCards = (): [React.ReactNode[], React.ReactNode[]] => {
  //   if (data) {
  //     const cards = data.map()
  //     return [rightColumn, leftColumn];
  //   }

  //   return [[], []];
  // };

  // const [rightColumn, leftColumn];

  return (
    <LoadingFetch error={error} isLoading={isLoading} skeleton={<PageSkeleton />}>
      {data ? (
        <Grid container spacing={2} columns={10}>
          <Grid item xs={5}>
            <Title>Product</Title>
          </Grid>
          <Grid item xs={5}>
            <Title>Product</Title>
          </Grid>
        </Grid>
      ) : (
        <Title>There is no products</Title>
      )}
    </LoadingFetch>
  );
}
