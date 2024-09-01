import { Paper, PaperProps } from '@mui/material';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { convertSxToArr } from '@/utils/convertSxToArr';
import { SxPropsObj } from '@/shared/types';

const sxPaper: SxPropsObj = { p: 1.5, cursor: ' pointer' };

interface IClickToClipboard extends PaperProps {
  text: string;
  handleOnCopy?: () => void;
}

export function ClickToClipboard({ text, sx = {}, handleOnCopy }: IClickToClipboard): React.ReactNode {
  const handleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    if (handleOnCopy) {
      handleOnCopy();
    }
  };

  return (
    <Paper sx={[sxPaper, ...convertSxToArr(sx)]} elevation={5} onClick={handleClick}>
      <TypographyBold>{text}</TypographyBold>
    </Paper>
  );
}
