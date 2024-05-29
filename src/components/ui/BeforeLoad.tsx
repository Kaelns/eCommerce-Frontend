import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps {
  isLoading: boolean;
}

export function BeforeLoad({ isLoading, children }: PropsWithChildren<IProps>): React.ReactNode {
  return isLoading ? <PageSkeleton /> : children;
}
