import { NavLink } from 'react-router-dom';
import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';
import { ROUTES } from '@/data/enum/routes.enum';
import styles from './NavLinkRouter.module.scss';

interface IProps {
  to: ROUTES;
  className?: string;
}

export function NavLinkRouter({ to, className = '', children }: ComponentPropsWithChildren<IProps>): JSX.Element {
  const classOnActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${styles.navlink} ${styles.active} ${className}` : `${styles.navlink} ${className}`;

  return (
    <NavLink to={to} className={classOnActive}>
      {children}
    </NavLink>
  );
}
