import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { mainRoutes, authorizedRoutes, nonAuthorizedRoutes, navbarRoutes } from '@/layout/Navbar/data/Navbar.routes';

import styles from '../Navbar.module.scss';

type ReturnNavbarType = typeof mainRoutes | typeof authorizedRoutes | typeof nonAuthorizedRoutes | typeof navbarRoutes;

type TabsOrientation = 'vertical' | 'horizontal';

interface IReturnUseNavbarType {
  navRoutes: ReturnNavbarType;
  orientation: TabsOrientation;
  additionalStyles?: string;
}

export function useNavbar(typeOfNavbar: Navbars): IReturnUseNavbarType {
  const { authUserToken } = useAuthContext();

  let navRoutes = null;
  let additionalStyles = '';
  let orientation: TabsOrientation = 'horizontal';

  const userPopoverRoutes = (): typeof authorizedRoutes | typeof nonAuthorizedRoutes =>
    authUserToken ? authorizedRoutes : nonAuthorizedRoutes;

  switch (typeOfNavbar) {
    case Navbars.MAIN:
      additionalStyles = styles.horizontalButton;
      navRoutes = mainRoutes;
      orientation = 'vertical';
      break;
    case Navbars.HEADER:
      navRoutes = navbarRoutes;
      break;
    case Navbars.POPOVER:
      additionalStyles = styles.horizontalButton;
      navRoutes = userPopoverRoutes();
      orientation = 'vertical';
      break;
    default:
      navRoutes = navbarRoutes;
  }

  return { navRoutes, orientation, additionalStyles };
}
