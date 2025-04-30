import type { SxStyles } from '@/shared/model/types';

import { Box } from '@mui/system';
import { Paper } from '@mui/material';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import cartImg from '@/pages/CartPage/assets/cart.png';
import { CartResetBtn } from '@/pages/CartPage/ui/components/buttons/CartResetBtn';
import { CartFinalize } from '@/pages/CartPage/ui/widgets/CartFinalize/CartFinalize';
import { CartDebounceUpdateLogic } from '@/pages/CartPage/ui/CartDebounceUpdateLogic';
import { CartProductsList } from '@/pages/CartPage/ui/components/lists/CartProductsList';
import { CartShowIfProductsExist } from '@/pages/CartPage/ui/components/conditional/CartShowIfProductsExist';
import { CartProductsFinalQuantity } from '@/pages/CartPage/ui/components/typography/CartProductsFinalQuantity';

import { AppError } from '@/widgets/AppError';

import { useGetAllCartsQuery } from '@/entities/cart';

import { TitleTypography } from '@/shared/ui/elements';
import { SuspenseWithError } from '@/shared/ui/components';

import { Paths } from '@/shared/model/data';

const sxStyles: SxStyles = {
  boxContainer: {
    display: 'flex',
    flexDirection: { zero: 'column', laptop: 'row' },
    justifyContent: { zero: 'initial', laptop: 'space-between' },
    gap: '2rem',
    mb: 2
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    p: '1.5rem'
  },
  sectionContainer: {
    flex: 7,
    gap: 3
  },
  sectionHeader: {
    position: 'relative',
    gap: 4,
    alignSelf: 'stretch'
  },
  asideContainer: {
    flex: 3
  }
};

export function CartPage() {
  const { isLoading, isError, error } = useGetAllCartsQuery(undefined, {
    selectFromResult: ({ isLoading, isError, error }) => ({ isLoading, isError, error })
  });

  return (
    <SuspenseWithError settings={{ isError, isLoading, error: getErrorMessage(error) }}>
      <CartShowIfProductsExist
        Fallback={<AppError src={cartImg} alt="Cart" message="Cart is empty" goTo={{ path: Paths.CATALOG, text: 'Go shopping' }} />}
        sxChildren={sxStyles.boxContainer}
      >
        <Paper component="section" sx={[sxStyles.sectionContainer, sxStyles.paper]}>
          <Box sx={sxStyles.sectionHeader}>
            <TitleTypography variant="h2">Cart</TitleTypography>
            <CartProductsFinalQuantity />

            {/* Absolute positioned button */}
            <CartResetBtn />
          </Box>

          <CartProductsList />
        </Paper>

        <Box component="aside" sx={sxStyles.asideContainer}>
          <CartFinalize sx={sxStyles.paper} />
        </Box>
      </CartShowIfProductsExist>

      {/* Component for logic without elements */}
      <CartDebounceUpdateLogic />
    </SuspenseWithError>
  );
}
