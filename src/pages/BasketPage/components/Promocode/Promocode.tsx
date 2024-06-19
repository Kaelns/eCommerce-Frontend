import { Box, ButtonGroup, Button, OutlinedInput } from '@mui/material';
import { useContext, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { InputReactEvent } from '@/data/types/InputReactEvent';
import { IPromocodeProps } from '@/pages/BasketPage/components/Promocode/Promocode.interface';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';

import styles from './Promocode.module.scss';

export function Promocode({ className, promocode, handlePromocode }: IPromocodeProps): React.ReactNode {
  const [inputValue, setInputValue] = useState('');
  const { handleOpenAlert } = useContext(AlertTextContext);

  const handleInputChange = (event: InputReactEvent): void => {
    setInputValue(event.target.value.toUpperCase());
  };

  const handleSubmit = (): void => {
    console.log(inputValue);
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
