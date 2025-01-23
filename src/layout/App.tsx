import type { SxStyles } from '@/shared/types/types';
import { Stack } from '@mui/system';
import { Alert } from '@/features/Alert';
import { Header } from '@/layout/Header';
import { Outlet } from 'react-router-dom';
import { SectionContainer } from '@/layout/SectionContainer';

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
  return (
    <>
      <Header />

      <Stack component="main" gap={1.5} sx={sxStyles.container}>
        <SectionContainer sx={sxStyles.sectionContainer}>
          <Outlet />
        </SectionContainer>
        <Alert />
      </Stack>
    </>
  );
}
