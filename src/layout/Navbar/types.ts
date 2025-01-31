import type {
  headerPaths,
  headerBurgerPaths,
  authorizedUserPaths,
  nonAuthorizedUserPaths
} from '@/layout/Navbar/constants';

export type NavbarPaths =
  | typeof authorizedUserPaths
  | typeof headerBurgerPaths
  | typeof headerPaths
  | typeof nonAuthorizedUserPaths;
