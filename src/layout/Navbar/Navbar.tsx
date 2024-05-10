import styles from './Navbar.module.scss';
import { List } from '@/components/ui/List/List';
import { ListItem } from '@/components/ui/ListItem/ListItem';
import { NavLinkRouter } from '@/components/ui/NavLinkRouter/NavLinkRouter';
import { ROUTES } from '@/data/enum/routes.enum';

export function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <List className={styles.navbar__list}>
        <ListItem>
          <NavLinkRouter to={ROUTES.MAIN}>Main</NavLinkRouter>
        </ListItem>
        <ListItem>
          <NavLinkRouter to={ROUTES.CATALOG}>Catalog</NavLinkRouter>
        </ListItem>
        <ListItem>
          <NavLinkRouter to={ROUTES.ABOUT_US}>About Us</NavLinkRouter>
        </ListItem>
      </List>
    </nav>
  );
}
