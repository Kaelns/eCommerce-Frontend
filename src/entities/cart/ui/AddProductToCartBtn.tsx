import type { Theme, SxProps, ButtonProps } from '@mui/material';
import type { SxStyles, SxPropsArr } from '@/shared/model/types';

import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { cartApi } from '@/entities/cart/api/cartApi';
import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';
import { createCartUpdateAction } from '@/entities/cart/api/helpers/createCartUpdateAction';
import { selectCartIdAndVersion, selectCartProductLineId } from '@/entities/cart/model/cart.slice';

import { useAlert } from '@/features/Alert';

import { CasualBtn } from '@/shared/ui/elements';
import { sxMixins } from '@/shared/lib/mui';
import { useAppSelector } from '@/shared/lib/redux';
import { convertSxToArr } from '@/shared/lib/helpers';
import { AlertSeverity } from '@/shared/model/data';

const sxStyles: SxStyles = {
  btn: {
    cursor: 'copy',
    backdropFilter: 'blur(5px)',
    ...sxMixins.animation(),
    ...sxMixins.mediaHover(sxMixins.opacity1, `${AddShoppingCartIcon}`),
    '&:disabled': {
      bgcolor: 'action.disabledBackground'
    }
  },
  btnActive: {
    bgcolor: 'Switch.primaryDisabledColor',
    ...sxMixins.mediaHover({
      bgcolor: 'primary.light'
    }),
    [`& ${AddShoppingCartIcon}`]: sxMixins.opacity0
  },
  btnCasual: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1
  },
  icon: {
    opacity: 0.7,
    ...sxMixins.animation()
  }
};

interface AddProductToCartBtnProps extends ButtonProps {
  productId: string;

  isIconBtn?: boolean;
  isAvailable: boolean;

  iconSx?: SxProps<Theme>;
}

export function AddProductToCartBtn({ productId, isIconBtn = false, isAvailable, sx = {}, iconSx = {} }: AddProductToCartBtnProps) {
  const { showAlert } = useAlert();

  const cartData = useAppSelector(selectCartIdAndVersion);
  const cartProductLineId = useAppSelector((state) => selectCartProductLineId(state, productId));

  const [updateCart, { isLoading }] = cartApi.useUpdateCartMutation();

  const isInCart = !!cartProductLineId;

  const sxBtn: SxPropsArr = [sxStyles.btn, isInCart && sxStyles.btnActive, ...convertSxToArr(sx)];
  const sxIcon: SxPropsArr = [sxStyles.icon, isLoading && sxMixins.invisible, ...convertSxToArr(iconSx)];

  const addToBasket = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    // * To prevent link wrapper to trigger
    event.stopPropagation();

    const action = isInCart
      ? createCartUpdateAction(CartUpdateActionTypes.DECREMENT, { cartProductLineId })!
      : createCartUpdateAction(CartUpdateActionTypes.INCREMENT, { productId })!;

    const { error } = await updateCart({ ...cartData, actions: [action] });

    if (error) {
      showAlert(`Error while adding to the cart: ${getErrorMessage(error)}`, AlertSeverity.ERROR);
    }
  };

  return isIconBtn ? (
    <IconButton loading={isLoading} disabled={isAvailable} onClick={addToBasket} sx={sxBtn}>
      <AddShoppingCartIcon sx={sxIcon} />
    </IconButton>
  ) : (
    <CasualBtn
      variant="outlined"
      loading={isLoading}
      disabled={isAvailable}
      onClick={addToBasket}
      endIcon={<AddShoppingCartIcon fontSize="small" sx={sxIcon} />}
      loadingPosition="end"
      sx={[sxStyles.btnCasual, ...sxBtn]}
    >
      {isInCart ? 'Remove from' : 'Add to'}
    </CasualBtn>
  );
}
