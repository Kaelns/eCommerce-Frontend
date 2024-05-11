import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import { Logo } from '@/components/ui/Logo/Logo';
import { Navbar } from '@/layout/Navbar/Navbar';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

export function Header(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <SectionContainer className={styles.header}>
          <Logo />
          <Navbar />
        </SectionContainer>
      </header>
      <Outlet />
    </>
  );
}
