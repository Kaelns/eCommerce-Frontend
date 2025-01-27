import type {
  headerPaths,
  authorizedUserPaths,
  headerBurgerPaths,
  nonAuthorizedUserPaths
} from '@/layout/Navbar/constants';

export type NavbarPaths =
  | typeof headerPaths
  | typeof headerBurgerPaths
  | typeof authorizedUserPaths
  | typeof nonAuthorizedUserPaths;
