import type { SxStyles } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Paper } from '@mui/material';

import { PROMOCODES } from '@/entities/cart';

import { useAlert } from '@/features/Alert';

import { BoldTypography } from '@/shared/ui/elements';
import { ClickToClipboardPaper } from '@/shared/ui/components';
import { sxMixins, pulseAnimation } from '@/shared/lib/mui';
import { AlertText } from '@/shared/model/data';

const sxStyles: SxStyles = {
  header: {
    p: 1.5,
    flex: 2,
    color: 'white',
    bgcolor: 'Alert.infoColor'
  },
  clipboard: {
    flex: 1,
    textAlign: 'center',
    color: 'Alert.warningColor',
    bgcolor: 'warning.light',
    animation: `${pulseAnimation} 5s infinite`,
    ...sxMixins.animation(),
    ...sxMixins.mediaHover({
      animation: `${pulseAnimation} 2s infinite`
    })
  }
};

export function PromocodeSection() {
  const { showAlert } = useAlert();

  const handleOnCopy = () => {
    showAlert(AlertText.CLIPBOARD_SUCCESS);
  };

  return (
    <Stack component="section" gap={2} direction={{ zero: 'column', tablet: 'row' }} alignItems={{ zero: 'stretch', table: 'center' }}>
      <Paper elevation={5} sx={sxStyles.header}>
        <BoldTypography>Our special offer:</BoldTypography>
      </Paper>

      <Stack direction="row" gap={2} flex={2}>
        {PROMOCODES.map((promocode) => (
          <ClickToClipboardPaper key={promocode} text={promocode} handleOnCopy={handleOnCopy} sx={sxStyles.clipboard} />
        ))}
      </Stack>
    </Stack>
  );
}
