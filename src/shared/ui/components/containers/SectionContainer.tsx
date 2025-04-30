import type { ContainerProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Container } from '@mui/material';

export function SectionContainer({ children, ...props }: PropsWithChildren<ContainerProps>) {
  return (
    <Container maxWidth="desktop" {...props}>
      {children}
    </Container>
  );
}
