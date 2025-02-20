import type { Theme, SxProps, ButtonProps } from '@mui/material';
import type { SxStyles, SxPropsArr } from '@/shared/model/types/types';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Typography, LinearProgress, CircularProgress } from '@mui/material';

import { useAddToBasketBtn } from '@/entities/cart/ui/AddProductToCartBtn/useAddToBasketBtn';

import { CasualBtn } from '@/shared/ui/elements/buttons/CasualBtn';

import { sxMixins } from '@/shared/lib/mui/mui-mixins';
import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';

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
  progress: {
    position: 'absolute',
    opacity: 0
  },
  linearProgress: {
    width: '50%',
    height: '5px',
    borderRadius: 1
  },
  icon: {
    opacity: 0.7,
    ...sxMixins.animation()
  }
};

interface AddToCartProps extends ButtonProps {
  productId: string;
  isIconBtn?: boolean;
  isAvailable: boolean;
  iconSx?: SxProps<Theme>;
  progressSx?: SxProps<Theme>;
  cartProductId: string | undefined;
}

//  TODO change props partially to objects

export function AddProductToCartBtn({
  isIconBtn = false,
  productId,
  cartProductId,
  isAvailable,
  sx = {},
  iconSx = {},
  progressSx = {}
}: AddToCartProps) {
  const { isInCart, isDisabled, addToBasket } = useAddToBasketBtn(productId, cartProductId);

  // TODO check is useMemo needed
  const sxBtn: SxPropsArr = [sxStyles.btn, isInCart && sxStyles.btnActive, ...convertSxToArr(sx)];
  const sxProgress: SxPropsArr = [sxStyles.progress, isDisabled && sxMixins.opacity1, ...convertSxToArr(progressSx)];
  const sxIcon: SxPropsArr = [sxStyles.icon, isDisabled && sxMixins.invisible, ...convertSxToArr(iconSx)];

  return isIconBtn ? (
    <IconButton onClick={addToBasket} disabled={isAvailable} sx={sxBtn}>
      <CircularProgress disableShrink thickness={5} sx={sxProgress} />
      <AddShoppingCartIcon sx={sxIcon} />
    </IconButton>
  ) : (
    <CasualBtn variant="outlined" disabled={isAvailable} onClick={addToBasket} sx={[sxStyles.btnCasual, ...sxBtn]}>
      <LinearProgress sx={[sxStyles.linearProgress, ...sxProgress]} />
      <Typography variant="subtitle2" sx={[isDisabled && sxMixins.invisible]}>
        {isInCart ? 'Remove from' : 'Add to'}
      </Typography>
      <AddShoppingCartIcon fontSize="small" sx={sxIcon} />
    </CasualBtn>
  );
}
