import { NavLink } from 'react-router-dom';
import ILinkRouter from '@/data/interface/ILinkRouter.interface';
import styles from './NavLinkRouter.module.scss';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function NavLinkRouter({ to, className = '', children }: PropsWithChildren<ILinkRouter>): JSX.Element {
  const classOnActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${styles.navlink} ${styles.active} ${className}` : `${styles.navlink} ${className}`;

  return (
    <NavLink to={to} className={classOnActive}>
      {children}
    </NavLink>
  );
}
