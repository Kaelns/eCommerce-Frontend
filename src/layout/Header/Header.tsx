import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import { Navbar } from '@/layout/Navbar/Navbar';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';
import { Icons } from '@/components/Icons/Icons';
import { ICONS } from '@/components/Icons/Icons.enum';
import { LinkRouter } from '@/components/ui/LinkRouter/LinkRouter';
import { ROUTES } from '@/data/enum/routes.enum';

export function Header(): JSX.Element {
  return (
    <>
      <header>
        <SectionContainer className={styles.header}>
          <Icons />
          <Navbar />
          <div className={styles.icons__container}>
            <LinkRouter to={ROUTES.BASKET}>
              <Icons icon={ICONS.BASKET} rem={3} />
            </LinkRouter>
            <LinkRouter to={ROUTES.USER}>
              <Icons icon={ICONS.USER} rem={3.4} />
            </LinkRouter>
          </div>
        </SectionContainer>
      </header>
      <Outlet />
    </>
  );
}
