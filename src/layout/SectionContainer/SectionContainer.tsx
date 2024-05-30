import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './SectionContainer.module.scss';

export function SectionContainer({ className, children }: PropsWithChildren<ContainerProps>): React.ReactNode {
  return <Container className={`${styles.sectionContainer} ${className}`}>{children}</Container>;
}
