import { Box } from '@mui/material';
import LoginForm from '@/features/AuthorizationForms/LoginForm/LoginForm';
import { Title } from '@/components/Title/Title';

import styles from './LoginPage.module.scss';

export function LoginPage(): React.ReactNode {
  return (
    <Box className={styles.loginContainer}>
      <Title>Login page</Title>
      <LoginForm />
    </Box>
  );
}
