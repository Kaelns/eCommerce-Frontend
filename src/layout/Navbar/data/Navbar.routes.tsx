import HowToRegIcon from '@mui/icons-material/HowToReg';
import KeyIcon from '@mui/icons-material/Key';
import { ROUTES } from '@/data/enum/routes.enum';
import { UserAvatarPopover } from '@/components/UserAvatarPopover/UserAvatarPopover';
import { TextWithElBeforeOrAfter } from '@/components/ui/TextWithElBeforeOrAfter/TextWithElBeforeOrAfter';

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
  [ROUTES.LOGIN]: <TextWithElBeforeOrAfter icon={<KeyIcon fontSize="small" />}>Login</TextWithElBeforeOrAfter>,
  [ROUTES.REGISTRATION]: (
    <TextWithElBeforeOrAfter icon={<HowToRegIcon fontSize="small" />}>Register</TextWithElBeforeOrAfter>
  )
};

export const authorizedRoutes = {
  [ROUTES.USER]: <UserAvatarPopover />
};
