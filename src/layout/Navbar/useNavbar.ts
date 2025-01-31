import type { NavbarPaths } from '@/layout/Navbar/types';

import { Navbars, headerPaths, headerBurgerPaths, authorizedUserPaths, nonAuthorizedUserPaths } from '@/layout/Navbar/constants';

import { useAppSelector } from '@/shared/redux/redux';
import { selectIsLoggedAuth } from '@/shared/redux/slices/auth.slice';

interface IUseNavbarReturn {
  navPaths: NavbarPaths;
  orientation: 'horizontal' | 'vertical';
}

export function useNavbar(typeOfNavbar: Navbars): IUseNavbarReturn {
  const isLogged = useAppSelector(selectIsLoggedAuth);

  let navPaths: NavbarPaths = headerPaths;
  let orientation: 'horizontal' | 'vertical' = 'horizontal';

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
