import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, CircularProgress, IconButton, LinearProgress, Typography } from '@mui/material';
import { useState } from 'react';
import { IAddToBasketProps } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn.interface';

import styles from './AddToBasketBtn.module.scss';

// Todo: delete  promise
const wait = async (): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

export function AddToBasketBtn({
  productKey,
  className,
  basketIconStyles,
  progressIconStyles,
  isIconBtn = false
}: IAddToBasketProps): React.ReactNode {
  const [isInCart, setIsInCart] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const btnStyles = `${className} ${styles.basketBtn} ${isInCart ? styles.activeIcon : ''}`;
  const progressStyles = `${progressIconStyles} ${styles.progress} ${isDisabled ? styles.activeProgress : ''}`;
  const iconStyles = `${basketIconStyles} ${styles.basketIcon} ${isDisabled ? styles.hidden : ''}`;

  const addToBasket =
    (key: string) =>
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault();
      event.stopPropagation();

      if (!isDisabled) {
        setIsDisabled(true);
        // Todo: addToBasket and wait
        await wait();
        console.log(key);
        // Todo: increment basket counter
        setIsDisabled(false);
        setIsInCart((prev) => !prev);
      }
    };

  // Todo: is Available product

  return isIconBtn ? (
    <IconButton onClick={addToBasket(productKey)} className={btnStyles}>
      <CircularProgress className={progressStyles} disableShrink thickness={5} />
      <AddShoppingCartIcon className={iconStyles} />
    </IconButton>
  ) : (
    <Button onClick={addToBasket(productKey)} className={btnStyles}>
      <LinearProgress className={progressStyles} />
      <Typography variant="subtitle2">{isInCart ? 'Remove from the cart' : 'Add to the cart'}</Typography>
      <AddShoppingCartIcon className={iconStyles} />
    </Button>
  );
}
