import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Box, ButtonGroup, Button, OutlinedInput } from '@mui/material';
import { BoxProps } from '@mui/system';
import { InputReactEvent, SxStyles } from '@/shared/types';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { useToken } from '@/services/hooks/useToken';
import { Severity } from '@/shared/constants';
import { useAlertText } from '@/features/AlertText/useAlertText';
import { promocodeCartCatch } from '@/services/helpers/cartHelpers/promocodeCartCatch/promocodeCartCatch';

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
  promocode: boolean;
  handlePromocode: (isSet: boolean) => void;
}

export function Promocode({ promocode, handlePromocode, ...props }: IPromocodeProps): React.ReactNode {
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
    <Box {...props}>
      <TypographyBold variant="subtitle2">
        {promocode ? 'Promo Code activated:' : 'Activate Promo Code:'}
      </TypographyBold>

      <ButtonGroup size="small" variant="outlined">
        <OutlinedInput disabled={promocode} value={inputValue} onChange={handleInputChange} sx={sxStyles.input} />
        <Button disabled={promocode} variant="contained" onClick={handleSubmit} sx={sxStyles.btn}>
          <CheckIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
