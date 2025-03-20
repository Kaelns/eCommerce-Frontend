import type { Theme } from '@mui/system';
import type { SxProps } from '@mui/material';
import type { SxStyles, InputReactEvent } from '@/shared/model/types';

import { Input, Button, ButtonGroup } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { setQuantityAction, decrementQuantityAction, incrementQuantityAction } from '@/entities/cart/model/cart.slice';

import { useAppDispatch } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  container: {
    width: 1,
    my: 1
  },

  input: (theme) => ({
    maxWidth: 80,
    border: 'none',
    '& > input': {
      textAlign: 'center',
      p: 0.3
    },
    [theme.breakpoints.down('mobile')]: {
      width: 1,
      maxWidth: 'initial'
    }
  }),

  btn: {
    bgcolor: 'Alert.infoColor'
  }
};

interface CartProductQuantityProps {
  id: string;
  quantity: number;
  sxInput?: SxProps<Theme>;
  sxContainer?: SxProps<Theme>;
}

export function CartProductQuantity({ id, quantity }: CartProductQuantityProps) {
  const dispatch = useAppDispatch();

  const handleBtnLeftDecrement = (): void => {
    dispatch(decrementQuantityAction({ productId: id }));
  };

  const handleBtnRightIncrement = (): void => {
    dispatch(incrementQuantityAction({ productId: id }));
  };

  const handleInputChange = (event: InputReactEvent): void => {
    dispatch(setQuantityAction({ productId: id, newQuantity: +event.target.value }));
  };

  return (
    <ButtonGroup size="small" variant="outlined" sx={sxStyles.container}>
      <Button variant="contained" onClick={handleBtnLeftDecrement} sx={sxStyles.btn}>
        <ChevronLeftIcon />
      </Button>
      <Input value={quantity} onChange={handleInputChange} sx={sxStyles.input} />
      <Button variant="contained" onClick={handleBtnRightIncrement} sx={sxStyles.btn}>
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  );
}
