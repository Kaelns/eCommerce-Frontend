import type { Theme } from '@mui/system';
import type { SxProps } from '@mui/material';
import type { SxStyles, InputReactEvent } from '@/shared/model/types/types';

import { Input, Button, ButtonGroup } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { setQuantityAction, decrementQuantityAction, incrementQuantityAction } from '@/pages/CartPage/model/cart.slice';

import { useAppDispatch } from '@/shared/lib/redux/redux.hooks';
import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';

const sxStyles: SxStyles = {
  input: {
    maxWidth: 80,
    border: 'none',
    '& > input': {
      textAlign: 'center',
      p: 0.3
    }
  },

  btn: {
    bgcolor: 'Alert.infoColor'
  }
};

interface IQuantityProps {
  id: string;
  quantity: number;
  sxInput?: SxProps<Theme>;
  sxContainer?: SxProps<Theme>;
}

export function Quantity({ id, quantity, sxInput = {}, sxContainer = {} }: IQuantityProps) {
  const dispatch = useAppDispatch();

  const handleBtnLeftDecrement = (): void => {
    dispatch(decrementQuantityAction({ id }));
  };

  const handleBtnRightIncrement = (): void => {
    dispatch(incrementQuantityAction({ id }));
  };

  const handleInputChange = (event: InputReactEvent): void => {
    dispatch(setQuantityAction({ id, newQuantity: +event.target.value }));
  };

  return (
    <ButtonGroup size="small" variant="outlined" sx={sxContainer}>
      <Button variant="contained" onClick={handleBtnLeftDecrement} sx={sxStyles.btn}>
        <ChevronLeftIcon />
      </Button>
      <Input value={quantity} onChange={handleInputChange} sx={[sxStyles.input, ...convertSxToArr(sxInput)]} />
      <Button variant="contained" onClick={handleBtnRightIncrement} sx={sxStyles.btn}>
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  );
}
