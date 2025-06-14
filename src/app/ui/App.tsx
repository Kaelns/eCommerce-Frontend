import type { SxStylesMap } from '@/shared/model/types';

import { useEffect } from 'react';
import { Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { AppHeader } from '@/widgets/AppHeader';

import { categoriesApi } from '@/entities/categories';
import { useStartSessionQuery } from '@/entities/auth';

import { Alert } from '@/features/Alert';

import '@/app/styles/index.scss';
import '@/app/model/init-scripts.ts';

import { SectionContainer, SuspenseWithError } from '@/shared/ui/components';
import { useAppDispatch } from '@/shared/lib/redux';

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
  const dispatch = useAppDispatch();

  const { isLoading, isError, error } = useStartSessionQuery(undefined, {
    selectFromResult: ({ isLoading, isError, error }) => ({ isLoading, isError, error })
  });

  useEffect(() => {
    if (!isLoading) {
      dispatch(categoriesApi.util.prefetch('getCategories', undefined, {}));
    }
  }, [dispatch, isLoading]);

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
