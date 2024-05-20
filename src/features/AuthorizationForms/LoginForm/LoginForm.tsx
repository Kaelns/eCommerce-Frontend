import { useState, useCallback } from 'react';
import { Divider, Chip, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonCustom from '@/features/AuthorizationForms/components/Button/Button';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import { checkCredentialInputs } from '@/features/AuthorizationForms/forms.helper';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { handleAuthentication } from '@/utils/createAuthApi';
import { ROUTES } from '@/data/enum/routes.enum';
import { eCommerceAPI } from '@/services/ECommerceAPI';

import styles from './LoginForm.module.scss';

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});
  const { setAuthUserToken } = useAuthContext();

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const { email, password } = inputs;
      console.log(`${email} ${password}`);

      await handleAuthentication(email, password, setAuthUserToken, setInputsError);
    },
    [inputs]
  );

  const handleOnChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checkFunction: (value: string) => string) => {
      const newValue = e.target.value;
      const error = checkFunction(newValue);
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
    },
    []
  );

  return (
    <Box component="form" className={styles.form}>
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsError} />
      <Box className={styles.btnContainer}>
        <ButtonCustom disabled={!checkCredentialInputs(inputs, inputsError)} onClick={onClick}>
          Login
        </ButtonCustom>
        <Divider>
          <Chip label="Or" size="small" />
        </Divider>
        <Button variant="contained" onClick={() => navigate(ROUTES.REGISTRATION)}>
          Register
        </Button>
      </Box>
    </Box>
  );
}
