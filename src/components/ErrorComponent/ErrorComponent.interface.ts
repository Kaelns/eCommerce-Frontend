import { ROUTES } from '@/features/Router/data/Router.enum';

export interface IErrorProps {
  message?: string;
  alt: string;
  src: string;
  className?: string;
  goTo?: ROUTES;
  goToText?: string;
}
