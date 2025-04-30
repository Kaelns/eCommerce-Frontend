import type { Theme, SxProps, ButtonProps } from '@mui/material';
import type { SxStyles, SxPropsArr } from '@/shared/model/types';

import { useTransition } from 'react';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { selectCartProductLineId } from '@/entities/cart/model/cart.slice';
import { addOrRemoveProductCart } from '@/entities/cart/lib/helpers/thunks/addOrRemoveProductCart';

import { CasualBtn } from '@/shared/ui/elements';
import { sxMixins } from '@/shared/lib/mui';
import { convertSxToArr } from '@/shared/lib/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

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
  const dispatch = useAppDispatch();

  const [isLoading, startTransition] = useTransition();

  const cartProductLineId = useAppSelector((state) => selectCartProductLineId(state, productId));

  const isInCart = !!cartProductLineId;
  const sxBtn: SxPropsArr = [sxStyles.btn, isInCart && sxStyles.btnActive, ...convertSxToArr(sx)];
  const sxIcon: SxPropsArr = [sxStyles.icon, isLoading && sxMixins.invisible, ...convertSxToArr(iconSx)];

  const addToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // TODO remove and creater better links
    // * To prevent link wrapper to trigger
    event.stopPropagation();

    startTransition(() => {
      dispatch(addOrRemoveProductCart(productId, cartProductLineId));
    });
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
