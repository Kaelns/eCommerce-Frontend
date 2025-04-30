import type { SxStyles } from '@/shared/model/types';

import { memo } from 'react';
import { Paper } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { queryArgsByCategory } from '@/entities/categories';
import { ProductCard, useGetProductsQuery } from '@/entities/product';

import { setCategoryIdAndNameAction } from '@/features/catalog-filters';

import { BoldTypography } from '@/shared/ui/elements';
import { SuspenseWithError } from '@/shared/ui/components';
import { useAppDispatch } from '@/shared/lib/redux';
import { Paths } from '@/shared/model/data';

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

export const ProductShowcaseSection = memo(function ShowcaseSection({
  categoryId,
  categoryName
}: {
  categoryId: string;
  categoryName: string;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: products, error, isError, isLoading } = useGetProductsQuery(queryArgsByCategory(categoryId), { skip: !categoryId });

  const setCategoryAndRedirect = (): void => {
    dispatch(setCategoryIdAndNameAction({ categoryId, categoryName }));
    navigate(Paths.CATALOG);
  };

  return (
    <Stack component="section" gap={2}>
      <Paper elevation={5} onClick={setCategoryAndRedirect} sx={sxStyles.header}>
        <BoldTypography variant="h2">{categoryName}</BoldTypography>
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
