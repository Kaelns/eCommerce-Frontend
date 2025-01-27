import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { SxProps } from '@mui/material';
import { ButtonGroup, Button, Input } from '@mui/material';
import type { Theme } from '@mui/system';
import type { InputReactEvent, SxStyles } from '@/shared/types/types';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { cartProductsSlice } from '@/pages/CartPage/slices/cartProducts.slice';
import { useAppDispatch } from '@/app/store/store';

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

export function Quantity({ id, quantity, sxInput = {}, sxContainer = {} }: IQuantityProps): React.ReactNode {
  const dispatch = useAppDispatch();

  const handleBtnLeftDecrement = (): void => {
    dispatch(cartProductsSlice.actions.decrementQuantityAction({ id }));
  };

  const handleBtnRightIncrement = (): void => {
    dispatch(cartProductsSlice.actions.incrementQuantityAction({ id }));
  };

  const handleInputChange = (event: InputReactEvent): void => {
    dispatch(cartProductsSlice.actions.setQuantityAction({ id, newQuantity: +event.target.value }));
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
