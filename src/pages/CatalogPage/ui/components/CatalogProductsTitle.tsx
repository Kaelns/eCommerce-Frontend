import { Box } from '@mui/system';

import { selectCategoryName } from '@/features/catalog-filters';

import { Text, TitleText } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';

interface CatalogProductsTitleProps {
  amount: number;
  isPositioned?: boolean;
}

export function CatalogProductsTitle({ isPositioned = false, amount }: CatalogProductsTitleProps) {
  const categoryName = useAppSelector(selectCategoryName);

  return (
    <Box>
      <TitleText isPositioned={isPositioned} variant="h2">
        {categoryName}
      </TitleText>
      <Text isPositioned={isPositioned} variant="h3">
        {amount} products
      </Text>
    </Box>
  );
}
