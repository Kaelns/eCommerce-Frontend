import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './SectionContainer.module.scss';

interface IProps extends ContainerProps {}

export function SectionContainer({ className, children }: PropsWithChildren<IProps>): JSX.Element {
  return <Container className={`${styles.sectionContainer} ${className}`}>{children}</Container>;
}
