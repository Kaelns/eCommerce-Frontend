import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';
import styles from './Navbar.module.scss';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Logo } from '@/components/ui/Logo/Logo';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <SectionContainer className={styles.header}>
        <Logo />
        <Navbar />
      </SectionContainer>
    </header>
  );
}
