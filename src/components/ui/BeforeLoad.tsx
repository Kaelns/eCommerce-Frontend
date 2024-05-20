import { PageSkeleton } from '@/components/ui/PageSkeleton';

interface IProps {
  isLoading: boolean;
  children: JSX.Element;
}
export function BeforeLoad({ isLoading, children }: IProps): JSX.Element {
  return isLoading ? <PageSkeleton /> : children;
}
