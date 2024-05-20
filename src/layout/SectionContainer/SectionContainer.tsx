import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps extends ContainerProps {}

export function SectionContainer({ sx, className, children }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Container maxWidth="lg" sx={sx} className={className}>
      {children}
    </Container>
  );
}
