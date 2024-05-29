import KeyIcon from '@mui/icons-material/Key';
import InfoIcon from '@mui/icons-material/Info';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { UserAvatarPopover } from '@/components/UserAvatarPopover/UserAvatarPopover';
import { TextWithElem } from '@/components/TextWithElem/TextWithElem';

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

export const headerRoutes = {
  [ROUTES.MAIN]: 'Main',
  [ROUTES.CATALOG]: 'Catalog',
  [ROUTES.ABOUT_US]: 'About Us'
};

export const headerBurgerRoutes = {
  [ROUTES.MAIN]: <TextWithElem icon={<MenuBookIcon fontSize="small" />}>Main</TextWithElem>,
  [ROUTES.CATALOG]: <TextWithElem icon={<CategoryIcon fontSize="small" />}>Catalog</TextWithElem>,
  [ROUTES.ABOUT_US]: <TextWithElem icon={<InfoIcon fontSize="small" />}>About Us</TextWithElem>
};

export const nonAuthorizedUserRoutes = {
  [ROUTES.LOGIN]: <TextWithElem icon={<KeyIcon fontSize="small" />}>Login</TextWithElem>,
  [ROUTES.REGISTRATION]: <TextWithElem icon={<HowToRegIcon fontSize="small" />}>Register</TextWithElem>
};

export const authorizedUserRoutes = {
  [ROUTES.USER]: <UserAvatarPopover />
};
