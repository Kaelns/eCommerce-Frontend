import { UserAvatarPopover } from '@/components/UserAvatarPopover/UserAvatarPopover';
import { ROUTES } from '@/data/enum/routes.enum';

export const navbarRoutes = {
  [ROUTES.MAIN]: 'Main',
  [ROUTES.CATALOG]: 'Catalog',
  [ROUTES.ABOUT_US]: 'About Us'
};

export const nonAuthorizedRoutes = {
  [ROUTES.LOGIN]: 'Login',
  [ROUTES.REGISTRATION]: 'Register'
};

export const authorizedRoutes = {
  [ROUTES.USER]: <UserAvatarPopover />
};
