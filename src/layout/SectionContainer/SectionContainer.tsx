import styles from './Navbar.module.scss';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SectionContainer({ className = '', children }: PropsWithChildren<IProps>): JSX.Element {
  return <div className={[styles.container, className].join(' ')}>{children}</div>;
}
