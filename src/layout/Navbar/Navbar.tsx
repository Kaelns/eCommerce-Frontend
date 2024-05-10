import { List } from '@/components/ui/List/List';
import { ListItem } from '@/components/ui/ListItem/ListItem';
import { NavLinkRouter } from '@/components/ui/NavLinkRouter/NavLinkRouter';
import { ROUTES } from '@/data/enum/routes.enum';
import styles from './Navbar.module.scss';

interface IProps {}
export function Navbar(props: IProps): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <List className={styles.navbar__list}>
        <ListItem>
          <NavLinkRouter to={ROUTES.MAIN}>Main</NavLinkRouter>
        </ListItem>
        <ListItem>
          <NavLinkRouter to={ROUTES.REGISTRATION}>Registration</NavLinkRouter>
        </ListItem>
      </List>
    </nav>
  );
}
