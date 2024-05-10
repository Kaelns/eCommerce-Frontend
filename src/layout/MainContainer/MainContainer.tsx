import { Outlet } from 'react-router-dom';
import styles from './MainContainer.module.scss';

export function MainContainer(): JSX.Element {
  return (
    <main className={styles.main}>
      {/* allow us to use useOutletContext inside child Routes */}
      <Outlet context={{ user: 'hello' }} />
    </main>
  );
}
