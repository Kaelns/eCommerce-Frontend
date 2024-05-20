import { Box, Typography } from '@mui/material';
import LoginForm from '@/features/AuthorizationForms/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';

export function LoginPage(): JSX.Element {
  return (
    <Box className={styles.loginContainer}>
      <Typography variant="h5">Login page</Typography>
      <LoginForm />
    </Box>
  );
}
