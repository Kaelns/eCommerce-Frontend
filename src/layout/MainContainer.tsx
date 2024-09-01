import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/system';
import { SectionContainer } from '@/layout/SectionContainer';
import { AlertText } from '@/features/AlertText/AlertText';
import { SxStyles } from '@/shared/types';

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

export function MainContainer(): React.ReactNode {
  return (
    <Stack component="main" gap={1.5} sx={sxStyles.container}>
      <SectionContainer sx={sxStyles.sectionContainer}>
        <Outlet />
      </SectionContainer>
      <AlertText />
    </Stack>
  );
}
