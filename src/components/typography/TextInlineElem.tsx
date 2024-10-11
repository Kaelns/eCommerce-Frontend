import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';
import { Stack } from '@mui/system';
import type { PropsWithChildren } from '@/shared/types';

interface ITextInlineElemProps extends TypographyProps {
  // TODO elem to Component
  elem: React.ReactNode;
  isAfter?: boolean;
  sxContainer?: SxProps<Theme>;
}

export function TextInlineElem({
  elem,
  children,
  isAfter = false,
  sxContainer = {},
  ...props
}: PropsWithChildren<ITextInlineElemProps>): React.ReactNode {
  return (
    <Stack direction="row" alignItems="center" gap={{ zero: 0.75, tablet: 1 }} sx={sxContainer}>
      {!isAfter && elem}
      {/* TODO remove classname */}
      <Typography {...props}>{children}</Typography>
      {isAfter && elem}
    </Stack>
  );
}
