import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { AppHeader } from '@/widgets/AppHeader';

import { useStartSessionQuery } from '@/entities/auth';

import '@/app/styles/index.scss';
import '@/app/model/init-scripts.ts';

import { Alert } from '@/features/Alert';

import { SectionContainer, SuspenseWithError } from '@/shared/ui/components';

const sxStyles: SxStylesMap = {
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
  const { isLoading, isError, error } = useStartSessionQuery(undefined, {
    selectFromResult: ({ isLoading, isError, error }) => ({ isLoading, isError, error })
  });

  return (
    <>
      <AppHeader />

      <Stack component="main" gap={1.5} sx={sxStyles.container}>
        <SectionContainer sx={sxStyles.sectionContainer}>
          <SuspenseWithError isLoading={isLoading} isError={isError} error={getErrorMessage(error)}>
            <Outlet />
          </SuspenseWithError>
        </SectionContainer>
        <Alert />
      </Stack>
    </>
  );
}
