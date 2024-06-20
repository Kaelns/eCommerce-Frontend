import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './LinkRouter.module.scss';

export function LinkRouter({ children, className, to, ...props }: PropsWithChildren<LinkProps>): React.ReactNode {
  return (
    <Link to={to} className={`${className} ${styles.link}`} {...props}>
      {children}
    </Link>
  );
}
