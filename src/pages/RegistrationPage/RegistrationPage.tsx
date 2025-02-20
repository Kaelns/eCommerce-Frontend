import { Stack } from '@mui/system';
import { Chip, Button, Divider } from '@mui/material';

import { router } from '@/app';

import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';

import { Paths } from '@/shared/model/data/enums';
// import { RegistrationForm } from '@/features/components/AuthForms/RegistrationForm/RegistrationForm';

export function RegistrationPage() {
  const navigateToLogin = () => router.navigate(Paths.LOGIN);

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
