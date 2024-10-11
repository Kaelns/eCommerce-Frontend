import { Button, Chip, Divider } from '@mui/material';
import { router } from '@/features/router/router';
import { Stack } from '@mui/system';
import { Paths } from '@/shared/constants';
import { Title } from '@/components/typography/Title';
// import { RegistrationForm } from '@/features/components/AuthForms/RegistrationForm/RegistrationForm';

export function RegistrationPage(): React.ReactNode {
  const navigateToLogin = () => router.navigate(Paths.LOGIN);

  return (
    <Stack gap={2} alignItems="center">
      <Stack gap={1.5} width={{ zero: 1, tablet: 400 }}>
        <Title textAlign="center">Registration Page</Title>
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
