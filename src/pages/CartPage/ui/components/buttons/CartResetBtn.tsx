import type { SxStylesObj } from '@/shared/model/types';

import { Tooltip } from '@mui/material';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import { clearCartAction } from '@/entities/cart';

import { CasualBtn } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

const clearCart: SxStylesObj = {
  position: 'absolute',
  width: 'min-content',
  top: 0,
  right: 0,
  zIndex: 50,
  borderRadius: (theme) => `0 ${theme.shape.borderRadius}px 0 ${theme.shape.borderRadius}px`
};

export function CartResetBtn() {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCartAction());
  };

  return (
    <Tooltip title="Clear cart" placement="top">
      <CasualBtn variant="contained" onClick={handleClearCart} sx={clearCart}>
        <ClearAllIcon />
      </CasualBtn>
    </Tooltip>
  );
}
