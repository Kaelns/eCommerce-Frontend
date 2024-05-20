import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { Navbars } from '@/layout/Navbar/Navbar.enum';
import { navbarButton } from '@/layout/Navbar/Navbar.mui';
import { authorizedRoutes, nonAuthorizedRoutes, navbarRoutes, mainRoutes } from '@/layout/Navbar/Navbar.routes';

type ReturnNavbarType = typeof mainRoutes | typeof authorizedRoutes | typeof nonAuthorizedRoutes | typeof navbarRoutes;

type TabsOrientation = 'vertical' | 'horizontal';

interface IReturnUseNavbarType {
  navRoutes: ReturnNavbarType;
  orientation: TabsOrientation;
  styles?: Record<string, string>;
}

export function useNavbar(typeOfNavbar: Navbars): IReturnUseNavbarType {
  const { authUserToken } = useAuthContext();

  let styles;
  let navRoutes = null;
  let orientation: TabsOrientation = 'horizontal';

  const userPopoverRoutes = (): typeof authorizedRoutes | typeof nonAuthorizedRoutes =>
    authUserToken ? authorizedRoutes : nonAuthorizedRoutes;

  switch (typeOfNavbar) {
    case Navbars.MAIN:
      styles = navbarButton;
      navRoutes = mainRoutes;
      orientation = 'vertical';
      break;
    case Navbars.HEADER:
      navRoutes = navbarRoutes;
      break;
    case Navbars.POPOVER:
      navRoutes = userPopoverRoutes();
      orientation = 'vertical';
      break;
    default:
      navRoutes = navbarRoutes;
  }

  return { navRoutes, orientation, styles };
}
