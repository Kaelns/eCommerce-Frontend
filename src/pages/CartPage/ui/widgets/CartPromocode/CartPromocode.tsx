import type { PaperProps } from '@mui/material';
import type { SxStyles } from '@/shared/model/types';

import { useRef, useTransition } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Paper, Button, ButtonGroup, OutlinedInput } from '@mui/material';

import { ChipPromocodeList } from '@/pages/CartPage/ui/widgets/CartPromocode/ui/ChipPromocodeList';
import { applyPromocodeToCart } from '@/pages/CartPage/ui/widgets/CartPromocode/lib/thunks/applyPromocodeToCart';

import { TitleTypography } from '@/shared/ui/elements';
import { useAppDispatch } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  container: {
    mt: -0.3
  },
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

export function CartPromocode(props: PaperProps) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [isLoading, startTransition] = useTransition();

  const handleSubmitPromocode = async (): Promise<void> => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      startTransition(() => {
        dispatch(applyPromocodeToCart(inputValue));
      });
    }
  };

  // TODO add remove promocode

  return (
    <Paper {...props}>
      <TitleTypography variant="h4">Promocodes</TitleTypography>

      <ButtonGroup size="small" variant="outlined">
        <OutlinedInput ref={inputRef} disabled={isLoading} sx={sxStyles.input} />
        <Button loading={isLoading} variant="contained" onClick={handleSubmitPromocode} sx={sxStyles.btn}>
          <CheckIcon />
        </Button>
      </ButtonGroup>

      <ChipPromocodeList />
    </Paper>
  );
}
