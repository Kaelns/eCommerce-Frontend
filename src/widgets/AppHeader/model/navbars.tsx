import KeyIcon from '@mui/icons-material/Key';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { UserFullNameCard } from '@/entities/user/ui/UserFullNameCard';

import { NodeWithText } from '@/shared/ui/elements';

import { Paths } from '@/shared/model/data';

export const nonAuthorizedUserPaths = {
  [Paths.LOGIN]: <NodeWithText Node={<KeyIcon fontSize="small" />}>Login</NodeWithText>,
  [Paths.REGISTRATION]: <NodeWithText Node={<HowToRegIcon fontSize="small" />}>Register</NodeWithText>
};

export const authorizedUserPaths = {
  [Paths.USER]: <UserFullNameCard />
};

export const headerPaths = {
  [Paths.MAIN]: 'Main',
  [Paths.CATALOG]: 'Catalog'
  // [Paths.ABOUT_US]: 'About Us'
};

export const headerBurgerPaths = {
  [Paths.MAIN]: <NodeWithText Node={<MenuBookIcon fontSize="small" />}>Main</NodeWithText>,
  [Paths.CATALOG]: <NodeWithText Node={<CategoryIcon fontSize="small" />}>Catalog</NodeWithText>,
  [Paths.ABOUT_US]: <NodeWithText Node={<InfoIcon fontSize="small" />}>About Us</NodeWithText>
};
