import type { Product } from '@/entities/product';
import type { SxStyles } from '@/shared/model/types';

import { Stack } from '@mui/system';

import { CreateImages } from '@/pages/DetailedProductPage/components/CreateImages';

import { selectLanguage } from '@/entities/user';

import { TitleTypography } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  container: (theme) => ({
    position: 'relative',
    width: '32.5%',

    [theme.breakpoints.down('tablet')]: {
      pb: 1.5,
      pr: 1.5,
      float: 'left',
      width: '45%'
    },

    [theme.breakpoints.down(500)]: {
      pr: 0,
      float: 'none',
      width: 1
    }
  }),
  discountIcon: {
    top: -1,
    right: -1
  },
  basketBtn: {
    mt: 1
  }
};

interface ProductHeaderProps {
  productData: Product;
  categoriesNames: string[];
}

export function ProductHead({ productData, categoriesNames }: ProductHeaderProps) {
  const language = useAppSelector(selectLanguage);

  // const { data: cartData = INIT_BASKET } = useFetch(fetchBasket, token);

  // useEffect(() => setLineItemId(findBasketProductId(cartData.basket, productData.id)), [cartData.basket, productData.id]);

  return (
    <Stack spacing={0.7} sx={sxStyles.container}>
      {/* <DiscountTypography discount={productData.discount} sx={sxStyles.discountIcon} /> */}

      <TitleTypography>{productData.name[language]}</TitleTypography>
      {/* <FullPriceTypography price={productData.price} discount={productData.discount} discountedPrice={productData.discountedPrice} />
      <Stack direction="row" gap={0.7} flexWrap="wrap">
        {categoriesNames.map((category) => (
          <Chip key={category} label={category} />
        ))}
      </Stack>

      <AddProductToCartBtn
        isAvailable={!productData.maxQuantity}
        cartProductId={lineItemId}
        productId={productData.id}
        sx={sxStyles.basketBtn}
      /> */}
    </Stack>
  );
}
