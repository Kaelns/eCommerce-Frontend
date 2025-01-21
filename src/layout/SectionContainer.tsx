import { Container } from '@mui/material';
import type { ContainerProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';

export function SectionContainer({ children, ...props }: PropsWithChildren<ContainerProps>): React.ReactNode {
  return (
    <Container maxWidth="laptopBig" {...props}>
      {children}
    </Container>
  );
}
