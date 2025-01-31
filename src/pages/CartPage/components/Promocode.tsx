import type { BoxProps } from '@mui/system';
import type { SxStyles, InputReactEvent } from '@/shared/types/types';

import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, ButtonGroup, OutlinedInput } from '@mui/material';

import { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { promocodeCartCatch } from '@/services/%%%BADhelpers/cartHelpers/promocodeCartCatch/promocodeCartCatch';

import { useAlert } from '@/features/alert';

import { BoldTypography } from '@/components/typography/BoldTypography';

import { AlertSeverity } from '@/shared/data/enums';
import { useAppSelector } from '@/shared/redux/redux';

const sxStyles: SxStyles = {
  input: {
    maxWidth: 300,
    '& > input': {
      textAlign: 'center',
      p: 0.3
    }
  },
  btn: {
    bgcolor: 'Alert.infoColor'
  }
};

interface IPromocodeProps extends BoxProps {
  handlePromocode: (isSet: boolean) => void;
}

export function Promocode({ handlePromocode, ...props }: IPromocodeProps): React.ReactNode {
  const authToken = useAppSelector(authSliceSelectors.selectAuthToken);
  const isPromocode = useAppSelector(cartSlice.selectors.selectIsPromocode);
  const [inputValue, setInputValue] = useState('');
  const { showAlert } = useAlert();

  const handleInputChange = (event: InputReactEvent): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (): Promise<void> => {
    const { error } = await promocodeCartCatch(ManageCart.DISCOUNT, authToken, inputValue);
    if (error) {
      showAlert(error, AlertSeverity.ERROR);
    } else {
      handlePromocode(true);
    }
  };

  return (
    <Box {...props}>
      <BoldTypography variant="subtitle2">{isPromocode ? 'Promo Code activated:' : 'Activate Promo Code:'}</BoldTypography>

      <ButtonGroup size="small" variant="outlined">
        <OutlinedInput disabled={isPromocode} value={inputValue} onChange={handleInputChange} sx={sxStyles.input} />
        <Button disabled={isPromocode} variant="contained" onClick={handleSubmit} sx={sxStyles.btn}>
          <CheckIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
