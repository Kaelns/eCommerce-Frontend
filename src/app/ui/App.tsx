import type { SxStyles } from '@/shared/model/types/types';

import { Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '@/widgets/AppHeader';

import { useStartSessionQuery } from '@/entities/auth';

import { Alert } from '@/features/Alert';

import { SectionContainer } from '@/shared/ui/components/containers/SectionContainer';
import { SuspenseWithError } from '@/shared/ui/components/conditional/SuspenseWithError';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

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

export function App() {
  const { isLoading, isError, error } = useStartSessionQuery();

  return (
    <>
      <AppHeader />

      <Stack component="main" gap={1.5} sx={sxStyles.container}>
        <SectionContainer sx={sxStyles.sectionContainer}>
          <SuspenseWithError settings={{ isLoading, isError, isOnlyInitialFetch: true, error: getErrorMessage(error) }}>
            <Outlet />
          </SuspenseWithError>
        </SectionContainer>
        <Alert />
      </Stack>
    </>
  );
}
