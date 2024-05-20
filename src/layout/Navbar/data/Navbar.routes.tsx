import KeyIcon from '@mui/icons-material/Key';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { UserAvatarPopover } from '@/components/UserAvatarPopover/UserAvatarPopover';
import { ROUTES } from '@/data/enum/routes.enum';
import { TextWithBeforeOrAfter } from '@/components/TextWithBeforeOrAfter';

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
  [ROUTES.LOGIN]: <TextWithBeforeOrAfter icon={<KeyIcon fontSize="small" />}>Login</TextWithBeforeOrAfter>,
  [ROUTES.REGISTRATION]: (
    <TextWithBeforeOrAfter icon={<HowToRegIcon fontSize="small" />}>Register</TextWithBeforeOrAfter>
  )
};

export const authorizedRoutes = {
  [ROUTES.USER]: <UserAvatarPopover />
};
