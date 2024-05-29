import { Box, Button, Chip, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '@/features/AuthorizationForms/RegistrationForm/RegistrationForm';
import { ROUTES } from '@/data/enum/routes.enum';

import styles from './RegistrationPage.module.scss';
import { Title } from '@/components/ui/Title';

export function RegistrationPage(): React.ReactNode {
  const navigate = useNavigate();

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.titleContainer}>
        <Title className={styles.title}>Registration Page</Title>
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
