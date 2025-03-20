import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { selectCategoryName } from '@/features/catalog-filters';

import { TitleTypography } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';

export function CatalogProductsTitle({ amount }: { amount: number }) {
  const categoryName = useAppSelector(selectCategoryName);

  return (
    <Box>
      <TitleTypography variant="h2">{categoryName}</TitleTypography>
      <Typography variant="h3">{amount} products</Typography>
    </Box>
  );
}
