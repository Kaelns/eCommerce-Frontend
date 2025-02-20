import type { SxStyles } from '@/shared/model/types/types';

import { selectCartProductId } from '@/pages/CartPage';

import { AddProductToCartBtn } from '@/entities/cart/ui/AddProductToCartBtn/AddProductToCartBtn';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

const ICON_WIDTH = '2.2rem';
const ICON_WIDTH_TABLET = '2.8rem';
const BORDER_RADIUS = '1.5rem';
const sxStyles: SxStyles = {
  basketBtn: (theme) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'fit-content',
    zIndex: 50,
    borderRadius: `${theme.shape.borderRadius}px 0 ${BORDER_RADIUS} 0`,

    [theme.breakpoints.down('tablet')]: {
      p: 1,
      inset: 'auto 0 0 auto',
      borderTopLeftRadius: BORDER_RADIUS,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }),

  basketIcon: {
    fontSize: { zero: ICON_WIDTH_TABLET, tablet: ICON_WIDTH }
  },

  basketProgress: {
    width: { zero: ICON_WIDTH_TABLET, tablet: ICON_WIDTH },
    height: { zero: ICON_WIDTH_TABLET, tablet: ICON_WIDTH }
  }
};
export function ProductToCartBtn({ productId, isAvailable }: { productId: string; isAvailable: boolean }) {
  const cartProductId = useAppSelector((state) => selectCartProductId(state, productId));

  return (
    <AddProductToCartBtn
      isIconBtn
      isAvailable={isAvailable}
      productId={productId}
      cartProductId={cartProductId}
      sx={sxStyles.basketBtn}
      iconSx={sxStyles.basketIcon}
      progressSx={sxStyles.basketProgress}
    />
  );
}
