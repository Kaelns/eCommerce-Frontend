import { Link } from 'react-router-dom';
import { ROUTES } from '@/data/enum/routes.enum';
import styles from './LinkRouter.module.scss';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps {
  to: ROUTES;
  className?: string;
}

export function LinkRouter({ to, className = '', children }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Link to={to} className={[styles.link, className].join(' ')}>
      {children}
    </Link>
  );
}
