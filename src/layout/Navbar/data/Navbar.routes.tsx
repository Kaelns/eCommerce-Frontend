import KeyIcon from '@mui/icons-material/Key';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { UserAvatarPopover } from '@/components/UserAvatarPopover/UserAvatarPopover';
import { ROUTES } from '@/data/enum/routes.enum';
import { TextWithIcon } from '@/components/TextWithIcon';

export const mainRoutes = {
  [ROUTES.MAIN]: 'Main',
  [ROUTES.USER]: 'User',
  [ROUTES.ERROR]: 'Error',
  [ROUTES.LOGIN]: 'Login',
  [ROUTES.BASKET]: 'Basket',
  [ROUTES.CATALOG]: 'Catalog',
  [ROUTES.ABOUT_US]: 'About Us',
  [ROUTES.REGISTRATION]: 'Register',
  [ROUTES.DETAILED_PRODUCT]: 'Detailed Product'
};

export const navbarRoutes = {
  [ROUTES.MAIN]: 'Main',
  [ROUTES.CATALOG]: 'Catalog',
  [ROUTES.ABOUT_US]: 'About Us'
};

export const nonAuthorizedRoutes = {
  [ROUTES.LOGIN]: <TextWithIcon icon={<KeyIcon fontSize="small" />}>Login</TextWithIcon>,
  [ROUTES.REGISTRATION]: <TextWithIcon icon={<HowToRegIcon fontSize="small" />}>Register</TextWithIcon>
};

export const authorizedRoutes = {
  [ROUTES.USER]: <UserAvatarPopover />
};
