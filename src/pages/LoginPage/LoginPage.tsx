import { Stack } from '@mui/system';
import { TitleTypography } from '@/components/typography/TitleTypography';

export function LoginPage(): React.ReactNode {
  return (
    <Stack justifyContent="center" alignItems="center" gap={2}>
      <TitleTypography>Login page</TitleTypography>
      {/* <LoginForm /> */}
    </Stack>
  );
}
