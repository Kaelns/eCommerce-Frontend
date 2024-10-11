import type { SxStyles } from '@/shared/types';
import { Stack } from '@mui/system';
import { Header } from '@/layout/Header';
import { Outlet } from 'react-router-dom';
import { AlertText } from '@/features/components/AlertText/AlertText';
import { SectionContainer } from '@/layout/SectionContainer';
// import { useEffect } from 'react';
// import { setIsPendingAuthAction } from '@/store/slices/auth.slice';
// import { useDispatch } from 'react-redux';

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

export function AppLayout(): React.ReactNode {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setIsPendingAuthAction({ isPending: false }));
  // }, [dispatch]);

  return (
    <>
      <Header />

      <Stack component="main" gap={1.5} sx={sxStyles.container}>
        <SectionContainer sx={sxStyles.sectionContainer}>
          <Outlet />
        </SectionContainer>
        <AlertText />
      </Stack>
    </>
  );
}
