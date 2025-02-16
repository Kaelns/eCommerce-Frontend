import type { ContainerProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';

import { Container } from '@mui/material';

export function SectionContainer({ children, ...props }: PropsWithChildren<ContainerProps>) {
  return (
    <Container maxWidth="desktop" {...props}>
      {children}
    </Container>
  );
}
