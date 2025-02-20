import KeyIcon from '@mui/icons-material/Key';
import InfoIcon from '@mui/icons-material/Info';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';

import { UserFullNameCard } from '@/entities/user/ui/UserFullNameCard';

import { ElemWithTypography } from '@/shared/ui/elements/typography/ElemWithTypography';

import { Paths } from '@/shared/model/data/enums';

export enum Navbars {
  APP_HEADER,
  HEADER_BURGER,
  USER_POPOVER
}

export const headerPaths = {
  [Paths.MAIN]: 'Main',
  [Paths.CATALOG]: 'Catalog',
  [Paths.ABOUT_US]: 'About Us'
};

export const headerBurgerPaths = {
  [Paths.MAIN]: <ElemWithTypography elem={<MenuBookIcon fontSize="small" />}>Main</ElemWithTypography>,
  [Paths.CATALOG]: <ElemWithTypography elem={<CategoryIcon fontSize="small" />}>Catalog</ElemWithTypography>,
  [Paths.ABOUT_US]: <ElemWithTypography elem={<InfoIcon fontSize="small" />}>About Us</ElemWithTypography>
};

export const nonAuthorizedUserPaths = {
  [Paths.LOGIN]: <ElemWithTypography elem={<KeyIcon fontSize="small" />}>Login</ElemWithTypography>,
  [Paths.REGISTRATION]: <ElemWithTypography elem={<HowToRegIcon fontSize="small" />}>Register</ElemWithTypography>
};

export const authorizedUserPaths = {
  [Paths.USER]: <UserFullNameCard />
};
