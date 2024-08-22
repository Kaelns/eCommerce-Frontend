import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IBeforeLoadProps {
  isLoading: boolean;
}

export function BeforeLoad({ isLoading, children }: PropsWithChildren<IBeforeLoadProps>): React.ReactNode {
  return isLoading ? <PageSkeleton /> : children;
}
