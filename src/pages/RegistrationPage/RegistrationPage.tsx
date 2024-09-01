import { Button, Chip, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { Paths } from '@/features/Router/Router.constants';
import { Title } from '@/components/typography/Title';
import RegistrationForm from '@/features/AuthForms/RegistrationForm/RegistrationForm';

export function RegistrationPage(): React.ReactNode {
  const navigate = useNavigate();
  const navigateToLogin = (): void => navigate(Paths.LOGIN);

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
      <RegistrationForm />
    </Stack>
  );
}
