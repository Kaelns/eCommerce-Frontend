import { BoxProps } from '@mui/material';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';

export const usePageSkeleton = (): ((props: BoxProps) => React.ReactNode) =>
  function skeleton(props: BoxProps): React.ReactNode {
    return <PageSkeleton {...props} />;
  };
