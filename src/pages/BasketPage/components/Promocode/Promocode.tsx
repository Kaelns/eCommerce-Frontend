import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Box, ButtonGroup, Button, OutlinedInput } from '@mui/material';
import { IPromocodeProps } from '@/pages/BasketPage/components/Promocode/Promocode.interface';
import { InputReactEvent } from '@/data/types/InputReactEvent';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { Severity } from '@/features/AlertText/AlertText.interface';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { useToken } from '@/services/hooks/useToken';
import { useAlertText } from '@/features/AlertText/useAlertText';
import { promocodeCartCatch } from '@/services/helpers/cartHelpers/promocodeCartCatch/promocodeCartCatch';

import styles from './Promocode.module.scss';

export function Promocode({ className, promocode, handlePromocode }: IPromocodeProps): React.ReactNode {
  const token = useToken();
  const [inputValue, setInputValue] = useState('');
  const { showAlert } = useAlertText();

  const handleInputChange = (event: InputReactEvent): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (): Promise<void> => {
    const { error } = await promocodeCartCatch(ManageCart.DISCOUNT, token, inputValue);
    if (error) {
      showAlert(error, Severity.ERROR);
    } else {
      handlePromocode(true);
    }
  };

  return (
    <Box className={className}>
      <TextBold variant="subtitle2" className={styles.title}>
        {promocode ? 'Promo Code activated:' : 'Activate Promo Code:'}
      </TextBold>
      <ButtonGroup className={styles.container} size="small" variant="outlined">
        <OutlinedInput disabled={promocode} value={inputValue} onChange={handleInputChange} className={styles.input} />
        <Button disabled={promocode} variant="contained" className={styles.btn} onClick={handleSubmit}>
          <CheckIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
