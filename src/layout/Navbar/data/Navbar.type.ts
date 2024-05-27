import {
  mainRoutes,
  headerRoutes,
  authorizedUserRoutes,
  headerBurgerRoutes,
  nonAuthorizedUserRoutes
} from '@/layout/Navbar/data/Navbar.routes';

type TabsOrientation = 'vertical' | 'horizontal';

type ReturnNavbarType =
  | typeof mainRoutes
  | typeof headerRoutes
  | typeof authorizedUserRoutes
  | typeof headerBurgerRoutes
  | typeof nonAuthorizedUserRoutes;

type ReturnUserRoutes = typeof authorizedUserRoutes | typeof nonAuthorizedUserRoutes;

export type { TabsOrientation, ReturnNavbarType, ReturnUserRoutes };
