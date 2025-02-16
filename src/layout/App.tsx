import type { SxStyles } from '@/shared/types/types';

import { Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';

import { useStartSessionQuery } from '@/services/ecommerce-api';
import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';

import { Alert } from '@/features/alert';
import { Header } from '@/layout/Header';
import { SectionContainer } from '@/layout/SectionContainer';

import { SuspenseWithError } from '@/components/SuspenseWithError';

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
  const { /* data, */ isLoading, isError, error } = useStartSessionQuery();

  return (
    <>
      <Header />

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
