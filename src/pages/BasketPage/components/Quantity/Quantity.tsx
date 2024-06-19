import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonGroup, Button, OutlinedInput, Input } from '@mui/material';
import { IQuantityProps } from '@/pages/BasketPage/components/Quantity/Quantity.interface';
import { BasketState } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { InputReactEvent } from '@/data/types/InputReactEvent';

import styles from './Quantity.module.scss';

export function Quantity({
  id,
  quantity,
  dispatchBasketProducts,
  inputStyles,
  containerStyles
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
    <ButtonGroup className={containerStyles} size="small" variant="outlined">
      <Button variant="contained" className={styles.btn} onClick={handleBtnLeft}>
        <ChevronLeftIcon />
      </Button>
      <Input value={quantity} onChange={handleInputChange} className={`${inputStyles} ${styles.input}`} />
      <Button variant="contained" className={styles.btn} onClick={handleBtnRight}>
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  );
}
