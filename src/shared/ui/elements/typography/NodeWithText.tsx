import type { Theme, SxProps } from '@mui/system';
import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Stack } from '@mui/system';

import { Text } from '@/shared/ui/elements/typography/Text';

interface NodeWithTextProps extends TypographyProps {
  isAfter?: boolean;
  isPositioned?: boolean;

  Node: React.ReactNode;
  sxContainer?: SxProps<Theme>;
}

export function NodeWithText({
  children,
  isAfter = false,
  isPositioned = false,
  Node,
  sxContainer = {},
  ...props
}: PropsWithChildren<NodeWithTextProps>) {
  return (
    <Stack direction="row" alignItems="center" gap={{ zero: 0.75, tablet: 1 }} sx={sxContainer}>
      {!isAfter && Node}
      <Text isPositioned={isPositioned} {...props}>
        {children}
      </Text>
      {isAfter && Node}
    </Stack>
  );
}
