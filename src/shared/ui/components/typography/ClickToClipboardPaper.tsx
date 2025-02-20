import type { PaperProps } from '@mui/material';
import type { SxPropsObj } from '@/shared/model/types/types';

import { Paper } from '@mui/material';

import { BoldTypography } from '@/shared/ui/elements/typography/BoldTypography';

import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';

const sxPaper: SxPropsObj = { p: 1.5, cursor: ' pointer' };

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
      <BoldTypography>{text}</BoldTypography>
    </Paper>
  );
}
