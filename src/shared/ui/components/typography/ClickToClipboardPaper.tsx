import type { PaperProps } from '@mui/material';
import type { SxStylesObj } from '@/shared/model/types';

import { Paper } from '@mui/material';

import { BoldText } from '@/shared/ui/elements';
import { convertSxToArr } from '@/shared/lib/helpers';

const sxPaper: SxStylesObj = { p: 1.5, cursor: ' pointer' };

interface ClickToClipboardProps extends PaperProps {
  text: string;
  handleOnCopy?: () => void;
}

export function ClickToClipboardPaper({ text, sx = {}, handleOnCopy }: ClickToClipboardProps) {
  const handleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    handleOnCopy?.();
  };

  return (
    <Paper sx={[sxPaper, ...convertSxToArr(sx)]} elevation={5} onClick={handleClick}>
      <BoldText>{text}</BoldText>
    </Paper>
  );
}
