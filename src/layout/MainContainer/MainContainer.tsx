import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

export function MainContainer(): JSX.Element {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      <SectionContainer sx={{ paddingBlock: 4 }}>
        <Outlet />
      </SectionContainer>
    </Box>
  );
}
