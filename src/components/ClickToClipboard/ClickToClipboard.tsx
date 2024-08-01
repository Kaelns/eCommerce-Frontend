import { Paper } from '@mui/material';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { Severity } from '@/components/AlertText/AlertText.interface';
import { IClickToClipboard } from '@/components/ClickToClipboard/ClickToClipboard.interfase';
import { useAlertText } from '@/components/AlertText/useAlertText';

import styles from './ClickToClipboard.module.scss';

export function ClickToClipboard({ text, className }: IClickToClipboard): React.ReactNode {
  const { showAlert } = useAlertText();

  const handleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    showAlert('The text was successfully copied', Severity.SUCCESS);
  };

  return (
    <Paper className={`${className} ${styles.paper}`} elevation={5} onClick={handleClick}>
      <TextBold>{text}</TextBold>
    </Paper>
  );
}
