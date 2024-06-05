import { IReturnUseNavbarType } from '@/layout/Navbar/data/Navbar.interface';
import { ReturnUserRoutes, TabsOrientation } from '@/layout/Navbar/data/Navbar.type';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import {
  mainRoutes,
  headerRoutes,
  headerBurgerRoutes,
  authorizedUserRoutes,
  nonAuthorizedUserRoutes
} from '@/layout/Navbar/data/Navbar.routes';

import styles from '../Navbar.module.scss';

export function useNavbar(typeOfNavbar: Navbars): IReturnUseNavbarType {
  const { authUserToken } = useAuthContext();

  let navRoutes = null;
  let orientation: TabsOrientation = 'horizontal';

  const userPopoverRoutes = (): ReturnUserRoutes => (authUserToken ? authorizedUserRoutes : nonAuthorizedUserRoutes);

  switch (typeOfNavbar) {
    case Navbars.MAIN:
      navRoutes = mainRoutes;
      orientation = 'vertical';
      break;
    case Navbars.HEADER:
      navRoutes = headerRoutes;
      break;
    case Navbars.HEADER_BURGER:
      navRoutes = headerBurgerRoutes;
      break;
    case Navbars.POPOVER:
      navRoutes = userPopoverRoutes();
      orientation = 'vertical';
      break;
    default:
      navRoutes = headerRoutes;
  }

  return { navRoutes, orientation };
}
