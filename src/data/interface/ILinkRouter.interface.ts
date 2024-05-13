import { ROUTES } from '@/data/enum/routes.enum';

export default interface ILinkRouter {
  to: ROUTES;
  className?: string;
}
