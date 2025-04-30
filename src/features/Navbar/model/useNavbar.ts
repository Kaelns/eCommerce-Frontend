import type { NavbarPaths } from '@/features/Navbar/model/types';

import { selectIsLoggedAuth } from '@/entities/auth';

import { Navbars, headerPaths, headerBurgerPaths, authorizedUserPaths, nonAuthorizedUserPaths } from '@/features/Navbar/model/constants';

import { useAppSelector } from '@/shared/lib/redux';

interface IUseNavbarReturn {
  navPaths: NavbarPaths;
  orientation: 'horizontal' | 'vertical';
}

export function useNavbar(typeOfNavbar: Navbars): IUseNavbarReturn {
  const isLogged = useAppSelector(selectIsLoggedAuth);

  let navPaths: NavbarPaths = headerPaths;
  let orientation: 'horizontal' | 'vertical' = 'horizontal';

  switch (typeOfNavbar) {
    case Navbars.APP_HEADER:
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
