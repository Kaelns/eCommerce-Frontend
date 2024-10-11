import { Stack } from '@mui/system';
import { Paper } from '@mui/material';
import { sxMixins } from '@/features/mui-theme/mixins';
import { PROMOCODES } from '@/services/ecommerce/constants';
import { useAlertText } from '@/features/components/AlertText/useAlertText';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { ClickToClipboard } from '@/components/ClickToClipboard';
import { AlertsText, pulseAnimation } from '@/shared/constants';
import type { SxStyles } from '@/shared/types';

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

  const handleOnCopy = () => {
    showAlert(AlertsText.CLIPBOARD_SUCCESS);
  };

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
