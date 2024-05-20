import { Box } from '@mui/material';
import LoginForm from '@/features/AuthorizationForms/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';
import { Title } from '@/components/ui/Title';

export function LoginPage(): JSX.Element {
  return (
    <Box className={styles.loginContainer}>
      <Title>Login page</Title>
      <LoginForm />
    </Box>
  );
}
