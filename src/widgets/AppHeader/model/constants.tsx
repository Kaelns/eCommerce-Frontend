import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';

import { ElemWithTypography } from '@/shared/ui/elements';

import { Paths } from '@/shared/model/data';

export const headerPaths = {
  [Paths.MAIN]: 'Main',
  [Paths.CATALOG]: 'Catalog',
  [Paths.ABOUT_US]: 'About Us'
};

export const headerBurgerPaths = {
  [Paths.MAIN]: <ElemWithTypography Node={<MenuBookIcon fontSize="small" />}>Main</ElemWithTypography>,
  [Paths.CATALOG]: <ElemWithTypography Node={<CategoryIcon fontSize="small" />}>Catalog</ElemWithTypography>,
  [Paths.ABOUT_US]: <ElemWithTypography Node={<InfoIcon fontSize="small" />}>About Us</ElemWithTypography>
};
