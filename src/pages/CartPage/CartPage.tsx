import type { SxStyles } from '@/shared/model/types';

import { Box } from '@mui/system';
import { Title } from '@mui/icons-material';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import cartImg from '@/pages/CartPage/assets/cart.png';
import { CartResetBtn } from '@/pages/CartPage/ui/components/buttons/CartResetBtn';
import { CartProductsList } from '@/pages/CartPage/ui/components/CartProductsList';
import { CartPromocode } from '@/pages/CartPage/ui/components/inputs/CartPromocode';
import { CartDebounceUpdateLogic } from '@/pages/CartPage/ui/CartDebounceUpdateLogic';
import { CartProductsFinalPrice } from '@/pages/CartPage/ui/components/typography/CartProductsFinalPrice';
import { CartShowIfProductsExist } from '@/pages/CartPage/ui/components/conditional/CartShowIfProductsExist';
import { CartProductsFinalQuantity } from '@/pages/CartPage/ui/components/typography/CartProductsFinalQuantity';

import { AppError } from '@/widgets/AppError';

import { useGetAllCartsQuery } from '@/entities/cart';

import { SuspenseWithError } from '@/shared/ui/components';

import { Paths } from '@/shared/model/data';

const sxStyles: SxStyles = {
  stackContainer: {
    alignItems: { zero: 'center', tablet: 'initial' },
    gap: 2,
    mb: 2
  },
  header: {
    position: 'relative',
    gap: 4,
    alignSelf: 'stretch'
  }
};

export function CartPage() {
  const { isLoading, isError, error } = useGetAllCartsQuery(undefined, {
    selectFromResult: ({ isLoading, isError, error }) => ({ isLoading, isError, error })
  });

  return (
    <SuspenseWithError settings={{ isError, isLoading, error: getErrorMessage(error) }} sx={sxStyles.stackContainer}>
      <CartShowIfProductsExist
        Fallback={
          <AppError src={cartImg} alt="Cart image" message="Your Cart is empty" goTo={{ path: Paths.CATALOG, text: 'Go shopping' }} />
        }
      >
        <Box sx={sxStyles.header}>
          <Box>
            <Title>Cart</Title>
            <CartProductsFinalQuantity />
            <CartProductsFinalPrice />
          </Box>

          <CartResetBtn />
          <CartPromocode />
        </Box>

        <CartProductsList />
      </CartShowIfProductsExist>

      {/* Component for logic without elements */}
      <CartDebounceUpdateLogic />
    </SuspenseWithError>
  );
}
