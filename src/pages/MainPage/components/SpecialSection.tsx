import { Paper } from '@mui/material';
import { useCallback } from 'react';
import { Stack } from '@mui/system';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { ClickToClipboard } from '@/components/ClickToClipboard';
import { useAlertText } from '@/features/AlertText/useAlertText';
import { AlertsText, pulseAnimation } from '@/shared/constants';
import { PROMOCODES } from '@/services/ECommerceInitApi.constants';
import { SxStyles } from '@/shared/types';
import { sxMixins } from '@/features/MuiTheme/mixins';

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

export function SpecialSection(): React.ReactNode {
  const { showAlert } = useAlertText();

  const handleOnCopy = useCallback(() => {
    showAlert(AlertsText.CLIPBOARD_SUCCESS);
  }, [showAlert]);

  return (
    <Stack
      component="section"
      gap={2}
      direction={{ zero: 'column', tablet: 'row' }}
      alignItems={{ zero: 'stretch', table: 'center' }}
    >
      <Paper elevation={5} sx={sxStyles.header}>
        <TypographyBold>Our special offer:</TypographyBold>
      </Paper>
      <Stack direction="row" gap={2} flex={2}>
        {PROMOCODES.map((promocode) => (
          <ClickToClipboard handleOnCopy={handleOnCopy} text={promocode} key={promocode} sx={sxStyles.clipboard} />
        ))}
      </Stack>
    </Stack>
  );
}
