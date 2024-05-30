import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { IBeforeLoadProps } from '@/components/BeforeLoad/BeforeLoad.interface';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function BeforeLoad({ isLoading, children }: PropsWithChildren<IBeforeLoadProps>): React.ReactNode {
  return isLoading ? <PageSkeleton /> : children;
}
