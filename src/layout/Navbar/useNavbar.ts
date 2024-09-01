import { NavbarPaths } from '@/layout/Navbar/Navbar.types';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import {
  Navbars,
  headerPaths,
  headerBurgerPaths,
  authorizedUserPaths,
  nonAuthorizedUserPaths
} from '@/layout/Navbar/Navbar.constants';

interface IUseNavbarReturn {
  navPaths: NavbarPaths;
  orientation: 'vertical' | 'horizontal';
}

export function useNavbar(typeOfNavbar: Navbars): IUseNavbarReturn {
  const { authTokens } = useAuthContext();

  let navPaths: NavbarPaths = headerPaths;
  let orientation: 'vertical' | 'horizontal' = 'horizontal';

  switch (typeOfNavbar) {
    case Navbars.HEADER:
      navPaths = headerPaths;
      break;
    case Navbars.HEADER_BURGER:
      navPaths = headerBurgerPaths;
      break;
    case Navbars.USER_POPOVER:
      navPaths = authTokens.token ? authorizedUserPaths : nonAuthorizedUserPaths;
      orientation = 'vertical';
      break;
    default:
  }

  return { navPaths, orientation };
}
