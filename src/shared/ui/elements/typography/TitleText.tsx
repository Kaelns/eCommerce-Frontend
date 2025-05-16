import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Text } from '@/shared/ui/elements/typography/Text';

interface TitleTextProps extends TypographyProps {
  isPositioned?: boolean;
}

export function TitleText({ children, isPositioned = false, variant = 'h3', ...props }: PropsWithChildren<TitleTextProps>) {
  return (
    <Text isPositioned={isPositioned} variant={variant} fontWeight="bold" {...props}>
      {children}
    </Text>
  );
}
