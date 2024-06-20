import { Paper } from '@mui/material';
import { useContext } from 'react';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { Severity } from '@/components/AlertText/AlertText.interface';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';
import { IClickToClipboard } from '@/components/ClickToClipboard/ClickToClipboard.interfase';

import styles from './ClickToClipboard.module.scss';

export function ClickToClipboard({ text, className }: IClickToClipboard): React.ReactNode {
  const { handleOpenAlert } = useContext(AlertTextContext);
  const handleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    handleOpenAlert('The text was successfully copied', Severity.SUCCESS);
  };

  return (
    <Paper className={`${className} ${styles.paper}`} elevation={5} onClick={handleClick}>
      <TextBold>{text}</TextBold>
    </Paper>
  );
}
