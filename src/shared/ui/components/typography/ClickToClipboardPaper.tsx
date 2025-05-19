import type { PaperProps } from '@mui/material';
import type { SxStylesObj } from '@/shared/model/types';

import { Paper, Tooltip } from '@mui/material';

import { BoldText } from '@/shared/ui/elements';
import { convertSxToArr } from '@/shared/lib/helpers';

const sxPaper: SxStylesObj = { p: 1.5, cursor: ' pointer' };

interface ClickToClipboardProps extends PaperProps {
  text: string;
  handleOnCopy?: () => void;
}

export function ClickToClipboardPaper({ text, handleOnCopy, sx = {}, ...props }: ClickToClipboardProps) {
  const handleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    handleOnCopy?.();
  };

  return (
    <Tooltip placement="top" title="Click to copy">
      <Paper elevation={5} onClick={handleClick} sx={[sxPaper, ...convertSxToArr(sx)]} {...props}>
        <BoldText variant="h4">{text}</BoldText>
      </Paper>
    </Tooltip>
  );
}
