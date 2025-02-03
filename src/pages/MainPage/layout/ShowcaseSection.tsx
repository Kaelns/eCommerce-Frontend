import type { SxStyles } from '@/shared/types/types';

import { memo } from 'react';
import { Paper } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';
import { useGetProductsQuery, queryArgsProductProps } from '@/services/ecommerce-api';

import { ProductCard } from '@/pages/CatalogPage';

import { SuspenseWithError } from '@/components/SuspenseWithError';
import { BoldTypography } from '@/components/typography/BoldTypography';

import { Paths } from '@/shared/data/enums';

const sxStyles: SxStyles = {
  body: {
    px: 1.5,
    py: 3
  },
  header: {
    bgcolor: 'Alert.infoColor',
    color: 'white',
    cursor: 'pointer',
    p: 1.5
  },
  productCardContainer: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('laptop')]: {
      '&:nth-last-of-type(-n + 1)': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('tablet')]: {
      '&:nth-last-of-type(-n + 2)': {
        display: 'none'
      }
    }
  })
};

export const ShowcaseSection = memo(function ShowcaseSection({ categoryId, categoryName }: { categoryId: string; categoryName: string }) {
  const navigate = useNavigate();

  const {
    data: products,
    error,
    isError,
    isLoading
  } = useGetProductsQuery({ 'filter.query': queryArgsProductProps.filterQuery.categoryId(categoryId), limit: 3 }, { skip: !categoryId });

  // TODO do a category redirect and set category in filter reducer
  const setCategoryAndRedirect = (): void => {
    navigate(Paths.CATALOG);
  };

  return (
    <Stack component="section" gap={2}>
      <Paper elevation={5} onClick={setCategoryAndRedirect} sx={sxStyles.header}>
        <BoldTypography>{categoryName}</BoldTypography>
      </Paper>

      <Paper sx={sxStyles.body}>
        <SuspenseWithError settings={{ error: getErrorMessage(error), isError, isLoading }}>
          <Grid container columns={9} spacing={2}>
            {products?.results.map((product) => (
              <Grid key={product.id} size={{ laptop: 3, mobile: 'grow', tablet: 4.5 }} sx={sxStyles.productCardContainer}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </SuspenseWithError>
      </Paper>
    </Stack>
  );
});
