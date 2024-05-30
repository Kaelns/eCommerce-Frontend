import { TypographyProps } from '@mui/material';

interface ITextWithElemProps extends TypographyProps {
  icon: React.ReactNode;
  isAfter?: boolean;
}

export type { ITextWithElemProps };
