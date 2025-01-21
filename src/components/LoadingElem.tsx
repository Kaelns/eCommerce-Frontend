import type { StackProps } from '@mui/system';
import { PageSkeleton } from '@/components/skeleton/PageSkeleton';
import type { PropsWithChildren } from '@/shared/types/types';

interface ILoadingElemProps {
  isLoading: boolean;
  Skeleton?: (props: StackProps) => React.ReactNode;
}
// TODO Suspence
export function LoadingElem({ isLoading, Skeleton = PageSkeleton, children }: PropsWithChildren<ILoadingElemProps>): React.ReactNode {
  return isLoading ? <Skeleton /> : children;
}
