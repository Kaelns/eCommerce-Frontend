import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonGroup, Button, Input, SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { InputReactEvent, SxStyles } from '@/shared/types';
import { convertSxToArr } from '@/utils/convertSxToArr';

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
  dispatchBasketProducts: React.Dispatch<IBasketAction>;
  sxInput?: SxProps<Theme>;
  sxContainer?: SxProps<Theme>;
}

export function Quantity({
  id,
  quantity,
  dispatchBasketProducts,
  sxInput = {},
  sxContainer = {}
}: IQuantityProps): React.ReactNode {
  const handleBtnLeft = (): void => {
    dispatchBasketProducts({ type: BasketState.DECREMENT, payload: { id } });
  };

  const handleBtnRight = (): void => {
    dispatchBasketProducts({ type: BasketState.INCREMENT, payload: { id } });
  };

  const handleInputChange = (event: InputReactEvent): void => {
    dispatchBasketProducts({ type: BasketState.SET_QUANTITY, payload: { id, value: +event.target.value } });
  };

  return (
    <ButtonGroup size="small" variant="outlined" sx={sxContainer}>
      <Button variant="contained" onClick={handleBtnLeft} sx={sxStyles.btn}>
        <ChevronLeftIcon />
      </Button>
      <Input value={quantity} onChange={handleInputChange} sx={[sxStyles.input, ...convertSxToArr(sxInput)]} />
      <Button variant="contained" onClick={handleBtnRight} sx={sxStyles.btn}>
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  );
}
