import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { selectCategoryName } from '@/features/catalog-filters';

import { TitleTypography } from '@/components/typography/TitleTypography';

import { useAppSelector } from '@/shared/redux/redux';

export function CatalogProductsTitle({ amount }: { amount: number }) {
  const categoryName = useAppSelector(selectCategoryName);

  return (
    <Box>
      <TitleTypography variant="h4">{categoryName}</TitleTypography>
      <Typography>{amount} products</Typography>
    </Box>
  );
}
