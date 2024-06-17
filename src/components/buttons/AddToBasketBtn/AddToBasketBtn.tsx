import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CircularProgress, IconButton, LinearProgress, Typography } from '@mui/material';
import { IAddToBasketProps } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn.interface';
import { useAddToBasketBtn } from '@/components/buttons/AddToBasketBtn/useAddToBasketBtn';
import { BtnCasual } from '@/components/buttons/BtnCasual/BtnCasual';

import styles from './AddToBasketBtn.module.scss';

export function AddToBasketBtn({
  productId,
  lineItemId,
  className,
  basketIconStyles,
  progressIconStyles,
  isIconBtn = false
}: IAddToBasketProps): React.ReactNode {
  const { isInCart, isDisabled, addToBasket } = useAddToBasketBtn(productId, lineItemId);

  const btnStyles = `${className} ${styles.basketBtn} ${isInCart ? styles.activeIcon : ''}`;
  const progressStyles = `${progressIconStyles} ${styles.progress} ${isDisabled ? styles.activeProgress : ''} `;
  const iconStyles = `${basketIconStyles} ${styles.basketIcon} ${isDisabled ? styles.hidden : ''}`;

  // Todo: is Available product

  return isIconBtn ? (
    <IconButton onClick={addToBasket} className={btnStyles}>
      <CircularProgress className={progressStyles} disableShrink thickness={5} />
      <AddShoppingCartIcon className={iconStyles} />
    </IconButton>
  ) : (
    <BtnCasual variant="outlined" onClick={addToBasket} className={`${styles.btnCasual} ${btnStyles}`}>
      <LinearProgress className={`${progressStyles} ${styles.progressLinear}`} />
      <Typography variant="subtitle2" className={`${isDisabled ? styles.hidden : ''}`}>
        {isInCart ? 'Remove from' : 'Add to'}
      </Typography>
      <AddShoppingCartIcon className={`${iconStyles} ${styles.iconCasual}`} />
    </BtnCasual>
  );
}
