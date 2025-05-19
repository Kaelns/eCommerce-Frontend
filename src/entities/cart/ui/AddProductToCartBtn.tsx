import type { Theme, SxProps, ButtonProps } from '@mui/material';
import type { SxStyles, SxStylesArr } from '@/shared/model/types';

import { useTransition } from 'react';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { selectCartProductLineId } from '@/entities/cart/model/cart.slice';
import { addOrRemoveProductCart } from '@/entities/cart/lib/helpers/thunks/addOrRemoveProductCart';

import { CasualBtn } from '@/shared/ui/elements';
import { sxMixins } from '@/shared/lib/mui';
import { convertSxToArr } from '@/shared/lib/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { ZIndex } from '@/shared/model/data';

const sxStyles: SxStyles = {
  btn: {
    zIndex: ZIndex.BUTTON,
    cursor: 'copy',
    backdropFilter: 'blur(5px)',
    '&:disabled': {
      bgcolor: 'action.disabledBackground'
    },
    ...sxMixins.animation(),
    ...sxMixins.mediaHover(sxMixins.opacity1, `${AddShoppingCartIcon}`)
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

  sxIcon?: SxProps<Theme>;
}

export function AddProductToCartBtn({
  productId,
  isAvailable,
  isIconBtn = false,
  sx = {},
  sxIcon: sxIconProp = {}
}: AddProductToCartBtnProps) {
  const dispatch = useAppDispatch();

  const [isLoading, startTransition] = useTransition();

  const cartProductLineId = useAppSelector((state) => selectCartProductLineId(state, productId));

  const isInCart = !!cartProductLineId;
  const sxBtn: SxStylesArr = [sxStyles.btn, isInCart && sxStyles.btnActive, ...convertSxToArr(sx)];
  const sxIcon: SxStylesArr = [sxStyles.icon, isLoading && sxMixins.invisible, ...convertSxToArr(sxIconProp)];

  const handleAddToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    startTransition(async () => {
      await dispatch(addOrRemoveProductCart(productId, cartProductLineId));
    });
  };

  return isIconBtn ? (
    <IconButton loading={isLoading} disabled={isAvailable} onClick={handleAddToBasket} sx={sxBtn}>
      <AddShoppingCartIcon sx={sxIcon} />
    </IconButton>
  ) : (
    <CasualBtn
      variant="outlined"
      loading={isLoading}
      disabled={isAvailable}
      onClick={handleAddToBasket}
      endIcon={<AddShoppingCartIcon fontSize="small" sx={sxIcon} />}
      loadingPosition="end"
      sx={[sxStyles.btnCasual, ...sxBtn]}
    >
      {isInCart ? 'Remove from' : 'Add to'}
    </CasualBtn>
  );
}
