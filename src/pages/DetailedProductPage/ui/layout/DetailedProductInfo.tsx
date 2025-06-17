import type { BoxProps } from '@mui/system';
import type { ProductLight } from '@/entities/product';
import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Chip } from '@mui/material';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { AddProductToCartBtn } from '@/entities/cart';
import { useGetCategoriesQuery } from '@/entities/categories';
import { selectCountry, selectLanguage, UserFullPriceText } from '@/entities/user';

import { SuspenseWithError } from '@/shared/ui/components';
import { TitleText, DiscountText } from '@/shared/ui/elements';
import { concatSx } from '@/shared/lib/helpers';
import { useAppSelector } from '@/shared/lib/redux';

const sxStyles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 0.5
  },

  discountIcon: {
    top: -1,
    right: -1
  },

  basketBtn: {
    mt: 1
  }
} satisfies SxStylesMap;

interface DetailedProductInfoProps extends BoxProps {
  productData: ProductLight;
}

export function DetailedProductInfo({ productData, sx }: DetailedProductInfoProps) {
  const language = useAppSelector(selectLanguage);
  const country = useAppSelector(selectCountry);

  const { data: categoriesData, error, isError, isLoading } = useGetCategoriesQuery();

  const { price, discount, discountedPrice } = productData.pricesObj[country];

  const categoriesNames = productData.categoriesIdArr
    .map((id) => categoriesData?.categoriesObj?.[id]?.name?.[language] ?? '')
    .filter(Boolean);

  return (
    <SuspenseWithError isLoading={isLoading} isError={isError} error={getErrorMessage(error)} sxWrapper={concatSx(sxStyles.container, sx)}>
      <TitleText>{productData.name[language]}</TitleText>
      <UserFullPriceText price={price} discount={discount} discountedPrice={discountedPrice} />

      <Stack direction="row" gap={0.7} flexWrap="wrap">
        {categoriesNames.map((category) => (
          <Chip key={category} label={category} size="small" />
        ))}
      </Stack>

      <DiscountText discount={discount} sx={sxStyles.discountIcon} />

      <AddProductToCartBtn isAvailable={!productData.maxQuantity} productId={productData.id} sx={sxStyles.basketBtn} />
    </SuspenseWithError>
  );
}
