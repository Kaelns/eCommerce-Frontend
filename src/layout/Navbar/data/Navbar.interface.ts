import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { ReturnNavbarType, TabsOrientation } from '@/layout/Navbar/data/Navbar.type';

interface INavbarProps {
  navbarType: Navbars;
  customOrientation?: TabsOrientation;
  onLinkClick?: () => void;
}

interface IReturnUseNavbarType {
  navRoutes: ReturnNavbarType;
  orientation: TabsOrientation;
}

export type { INavbarProps, IReturnUseNavbarType };
