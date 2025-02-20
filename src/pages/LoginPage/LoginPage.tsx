import { Stack } from '@mui/system';

import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';

export function LoginPage() {
  return (
    <Stack justifyContent="center" alignItems="center" gap={2}>
      <TitleTypography>Login page</TitleTypography>
      {/* <LoginForm /> */}
    </Stack>
  );
}
