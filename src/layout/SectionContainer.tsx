import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from '@/shared/types';

export function SectionContainer({ children, ...props }: PropsWithChildren<ContainerProps>): React.ReactNode {
  return (
    <Container maxWidth="laptopBig" {...props}>
      {children}
    </Container>
  );
}
