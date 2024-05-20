import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '@/features/AuthorizationForms/RegistrationForm/RegistrationForm';
import { ROUTES } from '@/data/enum/routes.enum';

import styles from './RegistrationPage.module.scss';

export function RegistrationPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.titleContainer}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Registration Page
        </Typography>
        <Divider>
          <Chip label="Or if you are already registered:" />
        </Divider>
        <Button variant="contained" onClick={() => navigate(ROUTES.LOGIN)}>
          Login
        </Button>
      </Box>
      <RegistrationForm />
    </Box>
  );
}
