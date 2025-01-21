import type { NavbarPaths } from '@/layout/Navbar/Navbar.types';
import {
  Navbars,
  headerPaths,
  headerBurgerPaths,
  authorizedUserPaths,
  nonAuthorizedUserPaths
} from '@/layout/Navbar/Navbar.constants';
import { useAppSelector } from '@/app/store';
import { selectIsLoggedAuth } from '@/shared/slices/auth.slice';

interface IUseNavbarReturn {
  navPaths: NavbarPaths;
  orientation: 'vertical' | 'horizontal';
}

export function useNavbar(typeOfNavbar: Navbars): IUseNavbarReturn {
  const isLogged = useAppSelector(selectIsLoggedAuth);

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
      navPaths = isLogged ? authorizedUserPaths : nonAuthorizedUserPaths;
      orientation = 'vertical';
      break;
    default:
  }

  return { navPaths, orientation };
}
