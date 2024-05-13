import { Link } from 'react-router-dom';
import ILinkRouter from '@/data/interface/ILinkRouter.interface';
import styles from './LinkRouter.module.scss';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function LinkRouter({ to, className = '', children }: PropsWithChildren<ILinkRouter>): JSX.Element {
  return (
    <Link to={to} className={[styles.link, className].join(' ')}>
      {children}
    </Link>
  );
}
