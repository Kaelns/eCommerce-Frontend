import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { selectCategoryName } from '@/features/catalog-filters';

import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

export function CatalogProductsTitle({ amount }: { amount: number }) {
  const categoryName = useAppSelector(selectCategoryName);

  return (
    <Box>
      <TitleTypography variant="h4">{categoryName}</TitleTypography>
      <Typography>{amount} products</Typography>
    </Box>
  );
}
