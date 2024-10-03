import KeyIcon from '@mui/icons-material/Key';
import InfoIcon from '@mui/icons-material/Info';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import { Paths } from '@/shared/constants';
import { UserAvatarPopover } from '@/components/UserAvatarPopover';
import { TextInlineElem } from '@/components/typography/TextInlineElem';

export enum Navbars {
  HEADER,
  HEADER_BURGER,
  USER_POPOVER
}

export const headerPaths = {
  [Paths.MAIN]: 'Main',
  [Paths.CATALOG]: 'Catalog',
  [Paths.ABOUT_US]: 'About Us'
};

export const headerBurgerPaths = {
  [Paths.MAIN]: <TextInlineElem elem={<MenuBookIcon fontSize="small" />}>Main</TextInlineElem>,
  [Paths.CATALOG]: <TextInlineElem elem={<CategoryIcon fontSize="small" />}>Catalog</TextInlineElem>,
  [Paths.ABOUT_US]: <TextInlineElem elem={<InfoIcon fontSize="small" />}>About Us</TextInlineElem>
};

export const nonAuthorizedUserPaths = {
  [Paths.LOGIN]: <TextInlineElem elem={<KeyIcon fontSize="small" />}>Login</TextInlineElem>,
  [Paths.REGISTRATION]: <TextInlineElem elem={<HowToRegIcon fontSize="small" />}>Register</TextInlineElem>
};

export const authorizedUserPaths = {
  [Paths.USER]: <UserAvatarPopover />
};
