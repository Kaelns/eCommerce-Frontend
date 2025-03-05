import type { BoxProps } from '@mui/system';
import type { SxStyles, InputReactEvent } from '@/shared/model/types/types';

import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, ButtonGroup, OutlinedInput } from '@mui/material';

import {
  selectCartIsPromocode,
  useUpdateCartMutation,
  CartUpdateActionTypes,
  selectCartIdAndVersion,
  createCartUpdateAction,
  setCartIsPromocodeAction
} from '@/entities/cart';

import { useAlert } from '@/features/Alert';

import { BoldTypography } from '@/shared/ui/elements/typography/BoldTypography';

import { AlertSeverity } from '@/shared/model/data/enums';
import { getErrorMessage } from '@/shared/api/ecommerce-api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

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

export function Promocode({ ...props }: BoxProps) {
  const dispatch = useAppDispatch();

  const isPromocode = useAppSelector(selectCartIsPromocode);
  const cartIdAndVersion = useAppSelector(selectCartIdAndVersion);

  const [updateCart, { isLoading }] = useUpdateCartMutation();

  const [inputValue, setInputValue] = useState('');
  const { showAlert } = useAlert();

  const handleInputChange = (event: InputReactEvent): void => {
    setInputValue(event.target.value);
  };

  const handleSubmitPromocode = async (): Promise<void> => {
    const addPromocodeAction = createCartUpdateAction(CartUpdateActionTypes.PROMOCODE, { promocode: inputValue })!;
    const { error } = await updateCart({ ...cartIdAndVersion, action: addPromocodeAction });
    if (error) {
      showAlert(getErrorMessage(error), AlertSeverity.ERROR);
    }
    dispatch(setCartIsPromocodeAction(Boolean(error)));
  };

  // TODO add remove promocode

  return (
    <Box {...props}>
      <BoldTypography variant="subtitle2">{isPromocode ? 'Promo Code activated:' : 'Activate Promo Code:'}</BoldTypography>

      <ButtonGroup size="small" variant="outlined">
        <OutlinedInput disabled={isPromocode || isLoading} value={inputValue} onChange={handleInputChange} sx={sxStyles.input} />
        <Button loading={isLoading} disabled={isPromocode} variant="contained" onClick={handleSubmitPromocode} sx={sxStyles.btn}>
          <CheckIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
