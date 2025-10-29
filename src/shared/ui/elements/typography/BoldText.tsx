import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Text } from '@/shared/ui/elements/typography/Text';

interface BoldTextProps extends TypographyProps {
  isPositioned?: boolean;
}

export function BoldText({ children, isPositioned = false, ...props }: PropsWithChildren<BoldTextProps>) {
  return (
    <Text isPositioned={isPositioned} fontWeight="bold" {...props}>
      {children}
    </Text>
  );
}
