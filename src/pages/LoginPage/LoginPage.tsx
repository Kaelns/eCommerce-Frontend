import { Stack } from '@mui/system';
import { LoginForm } from '@/features/AuthForms/LoginForm/LoginForm';
import { Title } from '@/components/typography/Title';

export function LoginPage(): React.ReactNode {
  return (
    <Stack justifyContent="center" alignItems="center" gap={2}>
      <Title>Login page</Title>
      <LoginForm />
    </Stack>
  );
}
