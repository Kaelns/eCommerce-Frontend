import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CircularProgress, IconButton, LinearProgress, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { IAddToBasketProps } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn.interface';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';
import { Severity } from '@/components/AlertText/AlertText.interface';

import styles from './AddToBasketBtn.module.scss';

// Todo: delete  promise
const wait = async (): Promise<{ error: string }> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ error: 'Error' }), 1000);
  });

export function AddToBasketBtn({
  productKey,
  className,
  basketIconStyles,
  progressIconStyles,
  isIconBtn = false
}: IAddToBasketProps): React.ReactNode {
  // Todo: get isInCart from the product itself
  const [isInCart, setIsInCart] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleOpenAlert } = useContext(AlertTextContext);

  const btnStyles = `${className} ${styles.basketBtn} ${isInCart ? styles.activeIcon : ''}`;
  const progressStyles = `${progressIconStyles} ${styles.progress} ${isDisabled ? styles.activeProgress : ''} `;
  const iconStyles = `${basketIconStyles} ${styles.basketIcon} ${isDisabled ? styles.hidden : ''}`;

  const addToBasket =
    (key: string) =>
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault();
      event.stopPropagation();

      if (!isDisabled) {
        setIsDisabled(true);
        // Todo: addToBasket and wait
        const responce = await wait();
        console.log(key);
        // Todo: increment basket counter
        if (responce.error) {
          handleOpenAlert(responce.error, Severity.ERROR);
        } else {
          setIsInCart((prev) => !prev);
        }
        setIsDisabled(false);
      }
    };

  // Todo: is Available product

  return isIconBtn ? (
    <IconButton onClick={addToBasket(productKey)} className={btnStyles}>
      <CircularProgress className={progressStyles} disableShrink thickness={5} />
      <AddShoppingCartIcon className={iconStyles} />
    </IconButton>
  ) : (
    <BtnCasual variant="outlined" onClick={addToBasket(productKey)} className={`${styles.btnCasual} ${btnStyles}`}>
      <LinearProgress className={`${progressStyles} ${styles.progressLinear}`} />
      <Typography variant="subtitle2" className={`${isDisabled ? styles.hidden : ''}`}>
        {isInCart ? 'Remove from' : 'Add to'}
      </Typography>
      <AddShoppingCartIcon className={`${iconStyles} ${styles.iconCasual}`} />
    </BtnCasual>
  );
}
