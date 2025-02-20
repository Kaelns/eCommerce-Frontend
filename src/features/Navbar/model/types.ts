import type { headerPaths, headerBurgerPaths, authorizedUserPaths, nonAuthorizedUserPaths } from '@/features/Navbar/model/constants';

export type NavbarPaths = typeof authorizedUserPaths | typeof headerBurgerPaths | typeof headerPaths | typeof nonAuthorizedUserPaths;
