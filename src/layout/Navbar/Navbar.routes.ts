import { ROUTES } from '@/data/enum/routes.enum';

export const navbarRoutes = {
  [ROUTES.MAIN]: 'Main',
  [ROUTES.CATALOG]: 'Catalog',
  [ROUTES.ABOUT_US]: 'About Us'
};

export const nonAuthorizedRoutes = {
  [ROUTES.USER]: 'User',
  [ROUTES.LOGIN]: 'Login',
  [ROUTES.REGISTRATION]: 'Register'
};

export const authorizedRoutes = {
  [ROUTES.USER]: 'User'
};
