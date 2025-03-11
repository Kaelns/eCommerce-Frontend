import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Chip, Button, Divider } from '@mui/material';

import { TitleTypography } from '@/shared/ui/elements';

import { Paths } from '@/shared/model/data';

export function RegistrationPage() {
  const navigate = useNavigate();
  const navigateToLogin = () => navigate(Paths.LOGIN);

  return (
    <Stack gap={2} alignItems="center">
      <Stack gap={1.5} width={{ zero: 1, tablet: 400 }}>
        <TitleTypography textAlign="center">Registration Page</TitleTypography>
        <Divider>
          <Chip label="Or if you are already registered:" />
        </Divider>
        <Button variant="contained" onClick={navigateToLogin}>
          Login
        </Button>
      </Stack>
      {/* <RegistrationForm /> */}
    </Stack>
  );
}
