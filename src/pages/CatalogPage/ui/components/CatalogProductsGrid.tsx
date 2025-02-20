import type { SxPropsObj } from '@/shared/model/types/types';
import type { ProductProjection } from '@commercetools/platform-sdk';

import { Grid } from '@mui/system';

import { ProductCard } from '@/entities/product/ui/ProductCard';

const sxProductWrapper: SxPropsObj = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch'
};
interface CatalogProductsGridProps {
  products?: ProductProjection[];
}
export function CatalogProductsGrid({ products = [] }: CatalogProductsGridProps) {
  return (
    <Grid container spacing={2} columns={9}>
      {products.map((product) => (
        <Grid key={product.id} size={{ mobile: 9, tablet: 4.5, laptop: 3 }} sx={sxProductWrapper}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
