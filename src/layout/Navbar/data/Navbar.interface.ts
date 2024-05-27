import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { ReturnNavbarType, TabsOrientation } from '@/layout/Navbar/data/Navbar.type';

interface INavbarProps {
  navbarType: Navbars;
  customOrientation?: TabsOrientation;
}

interface IReturnUseNavbarType {
  navRoutes: ReturnNavbarType;
  orientation: TabsOrientation;
  additionalStyles?: string;
}

export type { INavbarProps, IReturnUseNavbarType };
