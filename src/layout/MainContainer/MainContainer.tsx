import { Outlet } from 'react-router-dom';
import styles from './MainContainer.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MainContainer({ className = '' }: IProps): JSX.Element {
  return (
    <div className={[styles.container, className].join(' ')}>
      <Outlet />
    </div>
  );
}
