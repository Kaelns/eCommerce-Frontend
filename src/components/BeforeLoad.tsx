import { PageSkeleton } from '@/components/skeleton/PageSkeleton';
import { PropsWithChildren } from '@/shared/types';

interface IBeforeLoadProps {
  isLoading: boolean;
}

export function BeforeLoad({ isLoading, children }: PropsWithChildren<IBeforeLoadProps>): React.ReactNode {
  return isLoading ? <PageSkeleton /> : children;
}
