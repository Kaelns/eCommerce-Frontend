import {
  headerPaths,
  authorizedUserPaths,
  headerBurgerPaths,
  nonAuthorizedUserPaths
} from '@/layout/Navbar/Navbar.constants';

export type NavbarPaths =
  | typeof headerPaths
  | typeof headerBurgerPaths
  | typeof authorizedUserPaths
  | typeof nonAuthorizedUserPaths;
