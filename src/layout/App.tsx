import type { SxStyles } from '@/shared/types/types';
import { Stack } from '@mui/system';
import { Alert } from '@/features/alert';
import { Header } from '@/layout/Header';
import { Outlet } from 'react-router-dom';
import { SectionContainer } from '@/layout/SectionContainer';
import { useStartSessionQuery } from '@/services/ecommerce-api';
import { SuspenseWithError } from '@/components/SuspenseWithError';
import { PageSkeleton } from '@/components/skeleton/PageSkeleton';

const sxStyles: SxStyles = {
  container: {
    flex: 1
  },

  sectionContainer: {
    py: 3.5,
    px: { zero: 1, tablet: 2 },
    gap: 1.5
  }
};

export function App(): React.ReactNode {
  const { /* data, */ isLoading, isError /* , error */ } = useStartSessionQuery();

  return (
    <>
      <Header />

      <Stack component="main" gap={1.5} sx={sxStyles.container}>
        <SectionContainer sx={sxStyles.sectionContainer}>
          <SuspenseWithError settings={{ isLoading, isError /* , error: error?.data?.message */ }} components={{ Skeleton: <PageSkeleton /> }}>
            <Outlet />
          </SuspenseWithError>
        </SectionContainer>
        <Alert />
      </Stack>
    </>
  );
}
