import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Box, ButtonGroup, Button, OutlinedInput } from '@mui/material';
import type { BoxProps } from '@mui/system';
import type { InputReactEvent, SxStyles } from '@/shared/types';
import { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { Severity } from '@/shared/constants';
import { useAlertText } from '@/features/AlertText/useAlertText';
import { promocodeCartCatch } from '@/services/%%%BADhelpers/cartHelpers/promocodeCartCatch/promocodeCartCatch';
import { cartSlice } from '@/pages/BasketPage/cart.slice';
import { useAppSelector } from '@/store/redux';
import { authSliceSelectors } from '@/store/slices/auth.slice';

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
  const { showAlert } = useAlertText();

  const handleInputChange = (event: InputReactEvent): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (): Promise<void> => {
    const { error } = await promocodeCartCatch(ManageCart.DISCOUNT, authToken, inputValue);
    if (error) {
      showAlert(error, Severity.ERROR);
    } else {
      handlePromocode(true);
    }
  };

  return (
    <Box {...props}>
      <TypographyBold variant="subtitle2">
        {isPromocode ? 'Promo Code activated:' : 'Activate Promo Code:'}
      </TypographyBold>

      <ButtonGroup size="small" variant="outlined">
        <OutlinedInput disabled={isPromocode} value={inputValue} onChange={handleInputChange} sx={sxStyles.input} />
        <Button disabled={isPromocode} variant="contained" onClick={handleSubmit} sx={sxStyles.btn}>
          <CheckIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
