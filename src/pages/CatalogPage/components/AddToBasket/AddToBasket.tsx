import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CircularProgress, IconButton } from '@mui/material';
import { useState } from 'react';
import { addToCart } from '@/services/addToCart';
import styles from './AddToBasket.module.scss';

export function AddToBasket({ productKey }: { productKey: string }): React.ReactNode {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const activeBtn = isActiveBtn ? styles.activeIcon : '';
  const activeProgress = isDisabled ? styles.activeProgress : '';
  const hiddenIcon = isDisabled ? styles.hidden : '';

  const addToBasket =
    (key: string) =>
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault();
      event.stopPropagation();

      if (!isDisabled) {
        setIsDisabled(true);
        // Todo: addToBasket and wait
        // console.log(key);
        addToCart(key);
        // Todo: increment basket counter
        setIsDisabled(false);
        setIsActiveBtn((prev) => !prev);
      }
    };

  // Todo: is Available product

  return (
    <IconButton onClick={addToBasket(productKey)} className={`${styles.basketBtn} ${activeBtn}`}>
      <CircularProgress className={`${styles.progress} ${activeProgress}`} disableShrink thickness={5} />
      <AddShoppingCartIcon className={`${styles.basketIcon} ${hiddenIcon}`} />
    </IconButton>
  );
}
